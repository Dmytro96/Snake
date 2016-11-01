import { LEFT, UP, DOWN, RIGHT } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'
import Immutable from 'immutable'

import generateRandomSnake from '../utils/generateRandomSnake.js'
import { moveSnakeStep } from '../utils/moveSnake.js'

const initialState = Immutable.Map({
  // points: Immutable.List([
  //   Immutable.Map({x: 50, y: 200}),
  //   Immutable.Map({x: 75, y: 200}),
  //   Immutable.Map({x: 75, y: 175}),
  //   Immutable.Map({x: 75, y: 150})
  // ])
  points: generateRandomSnake()
});



export default function snake(state = initialState, action) {

  switch (action.type) {
    case RIGHT:
      return moveSnakeStep(action.type, state);
    case DOWN:
      return moveSnakeStep(action.type, state);
    case LEFT:
      return moveSnakeStep(action.type, state);
    case UP:
      return moveSnakeStep(action.type, state);
    case MAKE_SNAKE_BIGGER:

      return;
    default:
      return state
  }
}
