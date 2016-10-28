import {  STEP, AREA_SIZE, COLUMNS, WAYS, DIRECTIONS, SNAKE_LENGTH } from '../constants/snake.js'
import stepInCourseOfWay from './stepInCourseOfWay.js'
import { randomOfList, generateRandomPointOnMap } from './randomize.js'
import Immutable from 'immutable'


const generateRandomSnake = () => {
  let pointsOfSnake = Immutable.List()

  console.log(SNAKE_LENGTH + ' - length')

  pointsOfSnake = pointsOfSnake.push(Immutable.Map({
    x: generateRandomPointOnMap(),
    y: generateRandomPointOnMap()
  }))

  let nextPoint = Immutable.Map({})
  while (pointsOfSnake.size < SNAKE_LENGTH) {
    const randomOfWays = randomOfList(WAYS)
    nextPoint = stepInCourseOfWay(pointsOfSnake, nextPoint.get('turn'), randomOfWays)
    if (nextPoint.get('validationPass') === true) {
      pointsOfSnake = pointsOfSnake.push(Immutable.Map({
        x: nextPoint.get('x'),
        y: nextPoint.get('y'),
        turn: nextPoint.get('turn')
      }))
    }
  }

  return pointsOfSnake
}
export default generateRandomSnake
