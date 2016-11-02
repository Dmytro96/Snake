import { BUTTONS } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'

export
  const changeSnakeDirection = button => {
    return {
      type: BUTTONS.get(String(button))
    }
  },
  makeSnakeBigger = eatPosition => {
    return {
      type: MAKE_SNAKE_BIGGER,
      payload: eatPosition
    }
  };



