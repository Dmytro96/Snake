import stepInCourseOfWay from './stepInCourseOfWay.js'

export const moveSnakeStep = (way, state) => {
  const nextStep = stepInCourseOfWay(state.get('points'), way);

  if (nextStep.get('validationPass')) {
    state = state.update('points', points => points.shift());
    state = state.update('points', points => points.push(nextStep));
  } else {
    state = state.update('snakeAlive', val => false);
  }

  return state
};
