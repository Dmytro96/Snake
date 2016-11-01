import Immutable from 'immutable'
import { GENERATE_EAT_POSITION } from '../constants/eat.js'
import createPosition from '../utils/createPosition.js';



const initialState = Immutable.Map({
    eatPosition: Immutable.Map()
});

export default function eat(state = initialState, action) {
  console.log('in eat reducer');
  console.log(action);
  switch (action.type) {
    case GENERATE_EAT_POSITION:
      console.log(state.toJS());
      state = state.set('eatPosition', payload.eatPosition);
      console.log(state.toJS());
      return state;
    default:
      console.log('default');
      return state;
  }
}
