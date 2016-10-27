import {  STEP, AREA_SIZE, COLUMNS, WAYS, DIRECTIONS, SNAKE_LENGTH } from '../../constants/snake.js'
import stepInCourseOfWay from './stepInCourseOfWay.js'
import { randomOfList, generateRandomPointOnMap } from '../../utils/randomize.js'
import Immutable from 'immutable'


const generateRandomSnake = () => {
  let pointsOfSnake = Immutable.List()

  console.log(SNAKE_LENGTH + ' - length')

  const firstPoints = Immutable.Map({
    x: generateRandomPointOnMap(),
    y: generateRandomPointOnMap()
  })
  pointsOfSnake = pointsOfSnake.push(firstPoints)

  let nextPoint = Immutable.Map({})
  while (pointsOfSnake.size <= SNAKE_LENGTH) {
    const randomOfWays = randomOfList(WAYS)
    nextPoint = stepInCourseOfWay(nextPoint.get('turn'), randomOfWays, pointsOfSnake)
    if (nextPoint.get('validationPass') === true) {
      pointsOfSnake = pointsOfSnake.push({
        x: nextPoint.get('x'),
        y: nextPoint.get('y'),
        directionPoint: nextPoint.get('turn')
      })
    }
  }

  return pointsOfSnake
}
export default generateRandomSnake
