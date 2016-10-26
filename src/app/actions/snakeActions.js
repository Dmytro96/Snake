import { DIRECTION } from '../constants/snake.js'
import Immutable from 'immutable'

export function changeSnakeDirection(button) {
  return {
    type: DIRECTION.get(String(button))
  }
}
