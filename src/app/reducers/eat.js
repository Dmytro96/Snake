import Immutable from 'immutable'
import { GENERATE_EAT_POSITION } from '../constants/eat.js'
import createPosition from '../utils/createPosition.js';


const initialState = Immutable.Map({
    eatPosition: Immutable.Map()
});

export default function eat(state = initialState, action) {

  switch (action.type) {
    case GENERATE_EAT_POSITION:
      state = state.set('eatPosition', action.payload);
      return state;
    default:
      return state;
  }
}
