import { DIRECTIONS, WAYS, DIRECTIONS_MAP } from '../../constants/snake.js'
import validationOfSnakeGeneration from './validationOfSnakeGeneration.js'
import { Map } from 'immutable'

const stepInCourseOfWay = ( way = DIRECTIONS[Math.floor(Math.random() * 4)],
                            course = FORWARD,
                            pointsOfSnake
                          ) => {
  let currentPoint = pointsOfSnake[pointsOfSnake.length-1]
  let direction = DIRECTIONS_MAP.get(`${way}_${course}`)
  let nextPoint = {
    x: currentPoint.x + direction.x,
    y: currentPoint.y + direction.y
  }
  let validationPass = validationOfSnakeGeneration(nextPoint, pointsOfSnake)
  let turn = validationPass ? direction.turn : way

  console.log(direction)
  console.log(nextPoint)
  console.log(validationPass)
  console.log(pointsOfSnake.length)
  console.log('--------------------------------------------')

  return [nextPoint, turn, validationPass]
}
export default stepInCourseOfWay
