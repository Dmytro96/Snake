import { DIRECTION, DIRECTIONS_MAP, LEFT, UP, DOWN, RIGHT, FORWARD } from '../constants/snake.js'
import Immutable from 'immutable'

import generateRandomSnake from '../utils/generateRandomSnake.js'
import validationOfSnakeGeneration from '../utils/validationOfSnakeGeneration.js'
import stepInCourseOfWay from '../utils/stepInCourseOfWay.js'
import { moveSnake } from '../utils/moveSnake.js'

const initialState = Immutable.Map({
  // points: Immutable.List([
  //   Immutable.Map({x: 50, y: 200}),
  //   Immutable.Map({x: 75, y: 200}),
  //   Immutable.Map({x: 75, y: 175}),
  //   Immutable.Map({x: 75, y: 150})
  // ])
  points: generateRandomSnake()
})



export default function snake(state = initialState, action) {

  switch (action.type) {
    case RIGHT:
      return moveSnake(action.type, state)
    case DOWN:
      return moveSnake(action.type, state)
    case LEFT:
      return moveSnake(action.type, state)
    case UP:
      return moveSnake(action.type, state)
    default:
      return state
  }
}
