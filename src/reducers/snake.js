import { DIRECTION } from '../constants/constants.js'

const initialState = {
  width: '25',
  height: '25',
  x: 0,
  y: 0,
  direction: 'RIGHT'
}

const step = 25

export default function snake (state = initialState, action) {
  // if ( state.y >= 500 || state.x <= 0 || state.y >= 500 || state.y <= 500) die()
  switch (action.type) {
    // case state.direction:
    //   return state
    case DIRECTION[40]:
      return { ...state, y: +state.y + 25, direction: action.type}
    case DIRECTION[39]:
      return { ...state, x: +state.x + 25, direction: action.type }
    case DIRECTION[38]:
      return { ...state, y: +state.y - 25, direction: action.type }
    case DIRECTION[37]:
      return { ...state, x: +state.x - 25, direction: action.type }
    default:
      return state
  }
}
