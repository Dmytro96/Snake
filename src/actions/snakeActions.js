import { DIRECTION } from '../constants/constants.js'

export function changeSnakeDirection(button) {

  return {
    type: DIRECTION[button]
  }
}
