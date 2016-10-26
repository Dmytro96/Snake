import { SET_SCORE } from '../constants/score.js'
export function setScore(score) {
  return {
    type: SET_SCORE,
    payload: score
  }
}
