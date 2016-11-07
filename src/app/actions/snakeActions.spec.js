import { makeSnakeBigger, snakeDirectionUp, snakeDirectionRight, snakeDirectionDown, snakeDirectionLeft } from './snakeActions'
import { SNAKE_DIRECTION_UP, SNAKE_DIRECTION_RIGHT, SNAKE_DIRECTION_DOWN, SNAKE_DIRECTION_LEFT } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'
import {expect} from 'chai'

describe('Snake Action', () => {

  it('add point for snake', () => {
    const point = {x:25, y:75};
    const expectedAction = {
      type: MAKE_SNAKE_BIGGER,
      payload: point
    };
    expect(makeSnakeBigger(point)).to.deep.equal(expectedAction)
  });

  it('should move snake right', () => {
    const expectedAction = {
      type: SNAKE_DIRECTION_RIGHT
    };
    expect(snakeDirectionRight()).to.deep.equal(expectedAction)
  });

  it('should move snake left', () => {
    const expectedAction = {
      type: SNAKE_DIRECTION_LEFT
    };
    expect(snakeDirectionLeft()).to.deep.equal(expectedAction)
  });

  it('should move snake up', () => {
    const expectedAction = {
      type: SNAKE_DIRECTION_UP
    };
    expect(snakeDirectionUp()).to.deep.equal(expectedAction)
  });

  it('should move snake down', () => {
    const expectedAction = {
      type: SNAKE_DIRECTION_DOWN
    };
    expect(snakeDirectionDown()).to.deep.equal(expectedAction)
  });
});
