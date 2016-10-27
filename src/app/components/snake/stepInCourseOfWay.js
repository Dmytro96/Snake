import { DIRECTIONS, WAYS, DIRECTIONS_MAP, FORWARD } from '../../constants/snake.js'
import validationOfSnakeGeneration from './validationOfSnakeGeneration.js'
import Immutable from 'immutable'
import { randomOfList } from '../../utils/randomize.js'

const randomFourSides = randomOfList(DIRECTIONS)

const stepInCourseOfWay = ( way = randomFourSides,
                            course = FORWARD,
                            pointsOfSnake
                          ) => {

  const currentPoint = Immutable.Map(pointsOfSnake.last())
  const direction = DIRECTIONS_MAP.get(`${way}_${course}`)

  let nextPoint = Immutable.Map({
    x: currentPoint.get('x') + direction.get('x'),
    y: currentPoint.get('y') + direction.get('y')
  })

  nextPoint = nextPoint.set('validationPass', validationOfSnakeGeneration(nextPoint, pointsOfSnake))

  nextPoint = nextPoint.set('turn', nextPoint.get('validationPass') ? direction.get('turn') : way)

  return nextPoint
}

export default stepInCourseOfWay
