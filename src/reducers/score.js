const initialState = {
  count: 0
}

export default function score(state = initialState, action) {
  switch (action.type) {
    case 'SET_SCORE':
      return { ...state, count: action.payload }
    default:
      return state
  }
}
