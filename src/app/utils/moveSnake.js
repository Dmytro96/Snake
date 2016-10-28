import stepInCourseOfWay from './stepInCourseOfWay.js'

export const moveSnake = (way, state) => {
  const nextStep = stepInCourseOfWay(state.get('points'), way)

  state = state.setIn(['points', 'turn'], way)
  
  state = state.update('points', points => points.shift())
  state = state.update('points', points => points.push(nextStep))

  return state
}
