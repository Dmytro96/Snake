import { BUTTONS } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'
import Immutable from 'immutable'

export
  const changeSnakeDirection = button => {
    return {
      type: BUTTONS.get(String(button))
    }
  },
  makeSnakeBigger = () => {
    return {
      type: MAKE_SNAKE_BIGGER
    }
  };



