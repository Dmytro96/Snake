import Immutable from 'immutable'
import { GENERATE_EAT_POSITION } from '../constants/eat.js'
import createPosition from '../utils/createPosition.js';



// const initialState = Immutable.Map({
//     eatPosition: Immutable.Map({x:100,y:100})
// });

export default function eat(state , action) {

  switch (action.type) {
    case GENERATE_EAT_POSITION:
        state = state.set('eatPosition', payload.eatPosition);
      return state;
    default:
      return state;
  }
}
