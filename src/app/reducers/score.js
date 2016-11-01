import { SET_SCORE } from '../constants/score.js'
import Immutable from 'immutable'

const initialState = Immutable.Map({
  count: 0
})

export default function score(state = initialState, action) {
  switch (action.type) {
    case SET_SCORE:
      return { state, count: ++count }
    default:
      return state
  }
}