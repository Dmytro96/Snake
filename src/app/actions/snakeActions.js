import { createActions } from 'redux-actions';
import { SNAKE_DIRECTION_UP, SNAKE_DIRECTION_RIGHT, SNAKE_DIRECTION_DOWN, SNAKE_DIRECTION_LEFT } from '../constants/snake.js'
import { MAKE_SNAKE_BIGGER } from '../constants/eat.js'


export
  const
    { makeSnakeBigger, snakeDirectionUp, snakeDirectionRight, snakeDirectionDown, snakeDirectionLeft } =
      createActions({
        [MAKE_SNAKE_BIGGER]: eatPosition => eatPosition
      },
        SNAKE_DIRECTION_UP,
        SNAKE_DIRECTION_RIGHT,
        SNAKE_DIRECTION_DOWN,
        SNAKE_DIRECTION_LEFT
      );
