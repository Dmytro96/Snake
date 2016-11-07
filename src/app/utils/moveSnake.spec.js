import { moveSnakeStep } from './moveSnake'
import { RIGHT, LEFT } from '../constants/snake'
import Immutable from 'immutable'
import { expect } from 'chai'

const snakeState = Immutable.Map({
  points: Immutable.List([
    Immutable.Map({x: 0, y: 100}),
    Immutable.Map({x: 0, y: 125}),
    Immutable.Map({x: 0, y: 150})
  ])
});

describe('Move the snake', () => {

  it('a step to the right', () => {
    const nextSnakeState = Immutable.Map({
      points: Immutable.List([
        Immutable.Map({x: 0, y: 125}),
        Immutable.Map({x: 0, y: 150}),
        Immutable.Map({x: 25, y: 150, validationPass: true, turn: RIGHT})
      ])
    });
    expect(Immutable.is(moveSnakeStep(RIGHT,snakeState), nextSnakeState)).to.equal(true)
  });

  it('validation of over the area', () => {
    const nextSnakeState = Immutable.Map({
      points: Immutable.List([
        Immutable.Map({x: 0, y: 100}),
        Immutable.Map({x: 0, y: 125}),
        Immutable.Map({x: 0, y: 150})
      ])
    });
    expect(Immutable.is(moveSnakeStep(LEFT,snakeState), nextSnakeState)).to.equal(true)
  });


});
