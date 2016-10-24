import { UP, LEFT, DOWN, RIGHT, FORWARD, MAX_SNAKE_LENGTH, MIN_SNAKE_LENGTH, STEP, AREA_SIZE, DIRECTIONS_MAP, WAYS, DIRECTIONS } from '../../constants/snake.js'
import stepInCourseOfWay from './stepInCourseOfWay.js'


const generateRandomSnake = () => {
  let random = Math.random()
  let pointsOfSnake = []

  const snakeLength =
          Math.floor(Math.random() * (MAX_SNAKE_LENGTH - MIN_SNAKE_LENGTH) + MIN_SNAKE_LENGTH)
  console.log(snakeLength + ' - length')

  const generateFirstPoint = () => Math.floor(Math.random() * 20) * STEP

  const firstPoints = {
    x: generateFirstPoint(),
    y: generateFirstPoint()
  }
  pointsOfSnake.push(firstPoints)
  console.log(pointsOfSnake)

  let turn = undefined,
      validationPass,
      nextPoint,
      i = 1
  while (i < snakeLength) {
    [nextPoint, turn, validationPass] = stepInCourseOfWay(
                                            turn,
                                            WAYS[Math.floor(Math.random()*3)],
                                            pointsOfSnake
                                          )
    if (validationPass) {
      i++
      pointsOfSnake.push(nextPoint)
    }
  }

  console.log(pointsOfSnake)
  return pointsOfSnake.reverse()
}
export default generateRandomSnake
