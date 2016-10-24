import { DIRECTION} from '../constants/snake.js'

export function changeSnakeDirection(button) {
  return {
    type: DIRECTION[button]
  }
}
