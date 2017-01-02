import { SET_SCORE } from '../constants/score.js'
import Immutable from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = Immutable.Map({
  count: 0
});

export default handleActions({
  [SET_SCORE]: (state, action) =>
    state.set('count', state.get('count') + 1)
}, initialState);
