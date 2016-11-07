import Immutable from 'immutable'
import { expect } from 'chai'

import * as snakeActions from '../actions/snakeActions'

import { SNAKE_DIRECTION_LEFT, SNAKE_DIRECTION_UP, SNAKE_DIRECTION_DOWN,
SNAKE_DIRECTION_RIGHT, RIGHT, LEFT, UP, DOWN } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'

import { moveSnakeStep } from '../utils/moveSnake.js'
import { initialState } from './snake'

import snakeReducer from './snake'


describe('Snake reducer \n', () => {

  // it('check initial state', () => {
  //   // do not work
  //
  //   const checkState = snakeReducer();
  //   console.log(checkState);
  //
  //   // expect(Immutable.is(initialState, initialState)).to.equal(true);
  // });

  it('make a step to the right', () => {
    const moved = moveSnakeStep(RIGHT, initialState);
    expect(Immutable.is(snakeReducer(undefined, snakeActions.snakeDirectionRight()), moved)).to.equal(true)
  });

});


