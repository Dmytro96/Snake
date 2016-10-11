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
  switch (action.type) {
    case DIRECTION[40]:
      return { ...state, x: (+state.y - 25), direction: action.type}
    case DIRECTION[39]:
      return { ...state, x: +state.x + 25, direction: action.type }
    case DIRECTION[1]:
      return { ...state, x: state.x + 25, direction: action.type }
    default:
      return state
  }
}
