import stepInCourseOfWay from './stepInCourseOfWay.js'
import { DIRECTION_TO_WAY } from '../constants/snake'

export const moveSnakeStep = (way, state) => {
  const newWay = DIRECTION_TO_WAY.get(String(way));
  const nextStep = stepInCourseOfWay(state.get('points'), newWay);

  if (nextStep.get('validationPass')) {
    // state = state.setIn(['points', 'turn'], way)
    state = state.update('points', points => points.shift());
    state = state.update('points', points => points.push(nextStep));
  } else {
    // state = state.update('points', points => points.last().set('validationPass', false));
  }

  return state
};
