import Immutable from 'immutable'
import { handleActions } from 'redux-actions';

import { GENERATE_EAT_POSITION } from '../constants/eat.js'

const initialState = Immutable.Map({
    eatPosition: Immutable.Map()
});

export default handleActions({
    [GENERATE_EAT_POSITION]: (state, action) =>
      state.set('eatPosition', action.payload)
}, initialState );
