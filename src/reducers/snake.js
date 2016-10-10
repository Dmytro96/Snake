const initialState = {
  width: '25',
  height: '25',
  x: 0
}
let pos = 0
export default function snake(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SNAKE':
      pos += 25
      return { ...state, x: action.payload + pos }
    default:
      return state
  }
}
