import { BUTTONS } from '../constants/snake.js'
import Immutable from 'immutable'

export function changeSnakeDirection(button) {
  return {
    type: BUTTONS.get(String(button))
  }
}
