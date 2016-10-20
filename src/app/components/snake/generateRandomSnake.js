import R from 'ramda'
import { UP, LEFT, DOWN, RIGHT, FORWARD, MAX_SNAKE_LENGTH, MIN_SNAKE_LENGTH, STEP, AREA_SIZE } from '../../constants/snake.js'
const generateRandomSnake = () => {
  let random = Math.random()
  let pointsOfSnake = []

  const snakeLength = 10
  // Math.floor(Math.random() * (MAX_SNAKE_LENGTH - MIN_SNAKE_LENGTH) + MIN_SNAKE_LENGTH)






  console.log(snakeLength + ' - length')

  const generateFirstPoint = () =>
          // 50
          Math.floor(Math.random() * 20) * STEP

  const firstPoints = {
    x: generateFirstPoint(),
    y: generateFirstPoint()
  }
  pointsOfSnake.push(firstPoints)

  const randomBool = () => Math.random() < 0.5 ? true : false

  const directionsMap =
    {
      'UP_LEFT'   : { x: -25, y: 0, turn: LEFT },
      'UP_FORWARD': { x: 0, y: -25, turn: UP },
      'UP_RIGHT'  : { x: 25, y: 0, turn: RIGHT },

      'RIGHT_LEFT': { x: 0, y: -25, turn: UP },
      'RIGHT_FORWARD': { x: 25, y: 0, turn: RIGHT },
      'RIGHT_RIGHT': { x: 0, y: 25, turn: DOWN },

      'DOWN_LEFT': { x: 25, y: 0, turn: RIGHT },
      'DOWN_FORWARD': { x: 0, y: 25, turn: DOWN },
      'DOWN_RIGHT': { x: -25, y: 0, turn: LEFT },

      'LEFT_LEFT': { x: 0, y: 25, turn: DOWN },
      'LEFT_FORWARD': { x: -25, y: 0, turn: LEFT },
      'LEFT_RIGHT': { x: 0, y: -25, turn: UP }
    }
  const WAYS = [LEFT, FORWARD, RIGHT]
  const DIRECTIONS = [UP, RIGHT, DOWN, LEFT]

  let turn = undefined,
      validationPass,
      nextPointG = pointsOfSnake[pointsOfSnake.length-1]

  // WAY is TURN on the next step
  const stepInCourseOfWay = ( way = DIRECTIONS[Math.floor(Math.random() * 4)],
                              course = FORWARD,
                              currentPoint) => {
    let direction = directionsMap[`${way}_${course}`]
    let nextPoint = {
      x: currentPoint.x + direction.x,
      y: currentPoint.y + direction.y
    }
    let validationPass = true
    if ( nextPoint.x < AREA_SIZE && nextPoint.x > 0 && nextPoint.y < AREA_SIZE && nextPoint.y > 0){
      validationPass = true
    } else {
      validationPass = false
      direction.turn = turn
      nextPoint = currentPoint
    }
    pointsOfSnake.forEach((item) => {
      if (item.x === nextPoint.x && item.y === nextPoint.y) {
        console.log(item)
        validationPass = false
        nextPoint = currentPoint
        direction.turn = turn
      } else {
        validationPass = true
      }
    })
    return [nextPoint, direction.turn, validationPass]
  }


  let i = 1
  while (i < snakeLength) {
    [nextPointG, turn, validationPass] = stepInCourseOfWay(
                                            turn,
                                            WAYS[Math.floor(Math.random()*3)],
                                            nextPointG
                                          )
    if (validationPass) {
      i++
      pointsOfSnake.push(nextPointG)
    }
  }


  console.log(pointsOfSnake)
  return pointsOfSnake
}
export default generateRandomSnake
