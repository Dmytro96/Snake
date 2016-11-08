import Immutable from 'immutable'

import { SNAKE_LENGTH } from '../constants/snake.js'
import generateRandomSnake from './generateRandomSnake'
import { expect } from 'chai'


describe('Should correct generate first state', () => {

  it('the amount of points should equal SNAKE_LENGTH', () => {
    expect(generateRandomSnake().size).to.equal(SNAKE_LENGTH)
  });

  it('the return value should be Immutable List', () => {
    expect(Immutable.List.isList(generateRandomSnake())).to.be.ok
  });

});
