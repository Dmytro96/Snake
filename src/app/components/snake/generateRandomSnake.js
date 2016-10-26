import {  STEP, AREA_SIZE, COLUMNS, WAYS, DIRECTIONS, SNAKE_LENGTH } from '../../constants/snake.js'
import stepInCourseOfWay from './stepInCourseOfWay.js'
import { randomOfList } from '../../utils/randomize.js'
import Immutable from 'immutable'


const generateRandomSnake = () => {
  let pointsOfSnake = Immutable.List()

  console.log(SNAKE_LENGTH + ' - length')

  const generateFirstPoint = () => Math.floor(Math.random() * COLUMNS) * STEP

  const firstPoints = Immutable.Map({
    x: generateFirstPoint(),
    y: generateFirstPoint()
  })
  pointsOfSnake = pointsOfSnake.push(firstPoints)
  console.log(pointsOfSnake)
  let nextPoint = {
    turn: undefined
  }
  while (pointsOfSnake.size <= SNAKE_LENGTH) {
    const randomOfWays = randomOfList(WAYS)
    nextPoint = Immutable.Map(stepInCourseOfWay(nextPoint.get('turn'), randomWay, pointsOfSnake))
    if (nextPoint.get('validationPass')) {
      pointsOfSnake = pointsOfSnake.push({
        x: nextPoint.get('x'),
        y: nextPoint.get('y')
      })
    }
  }

  console.log(pointsOfSnake)
  return pointsOfSnake
}
export default generateRandomSnake
