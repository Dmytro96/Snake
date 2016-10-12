import { DIRECTION } from '../constants/constants.js'

const initialState = {
  width: '25',
  height: '25',
  x: 0,
  y: 0,
  direction: 'RIGHT_DIRECTION'
}

export default function snake (state = initialState, action) {
  // if ( state.y >= 500 || state.x <= 0 || state.y >= 500 || state.y <= 500) die()
  switch (action.type) {
    case 'DOWN_DIRECTION':
      return {
        ...state,
         y: state.y + 25,
         direction: action.type
      }
    case 'RIGHT_DIRECTION':
      return {
        ...state,
        x: state.x + 25,
        direction: action.type
      }
    case 'UP_DIRECTION':
      return {
        ...state,
        y: state.y - 25,
        direction: action.type
      }
    case 'LEFT_DIRECTION':
      return {
        ...state,
        x: state.x - 25,
        direction: action.type
      }
    default:
      return state
  }
}
