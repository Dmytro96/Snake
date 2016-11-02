import { createAction } from 'redux-actions';

import { SET_SCORE } from '../constants/score.js'

export const setScore = createAction(SET_SCORE);


// export function setScore() {
//   return {
//     type: SET_SCORE
//   }
// }

