import Immutable from 'immutable'
import { handleActions } from 'redux-actions'

import { SNAKE_DIRECTION_LEFT, SNAKE_DIRECTION_UP, SNAKE_DIRECTION_DOWN,
  SNAKE_DIRECTION_RIGHT, RIGHT, LEFT, UP, DOWN } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'

import generateRandomSnake from '../utils/generateRandomSnake.js'
import { moveSnakeStep } from '../utils/moveSnake.js'


export const initialState = Immutable.Map({
  points: generateRandomSnake()
});

export default handleActions({
  [SNAKE_DIRECTION_RIGHT]: (state, action) =>
    moveSnakeStep(RIGHT, state),
  [SNAKE_DIRECTION_DOWN]: (state, action) =>
    moveSnakeStep(DOWN, state),
  [SNAKE_DIRECTION_LEFT]: (state, action) =>
    moveSnakeStep(LEFT, state),
  [SNAKE_DIRECTION_UP]: (state, action) =>
    moveSnakeStep(UP, state),
  [MAKE_SNAKE_BIGGER]: (state, action) =>
    state.update('points', points => points.unshift(action.payload))
}, initialState );
