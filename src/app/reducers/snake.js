import { DIRECTION, DIRECTIONS_MAP, LEFT, UP, DOWN, RIGHT, FORWARD } from '../constants/snake.js'
import Immutable from 'immutable'

import generateRandomSnake from '../utils/generateRandomSnake.js'
import validationOfSnakeGeneration from '../utils/validationOfSnakeGeneration.js'
import stepInCourseOfWay from '../utils/stepInCourseOfWay.js'

const initialState = Immutable.Map({
  points: Immutable.List([
    Immutable.Map({x: 50, y: 200}),
    Immutable.Map({x: 75, y: 200}),
    Immutable.Map({x: 75, y: 175}),
    Immutable.Map({x: 75, y: 150})
  ])
  // points: generateRandomSnake()
})

export default function snake(state = initialState, action) {

  // console.log(state)

  switch (action.type) {
    case RIGHT:
      // console.log(action.type)
      // console.log(state.toJS())
      // console.log(FORWARD)
      const nextStep = stepInCourseOfWay(RIGHT, FORWARD, state.get('points'))
      state = state.get('points').shift()
      // console.log(state.toJS())
      console.log(nextStep.toJS())
      // state.get('points').push(nextStep)




      // state.get('points')
    //  state = state.update('points', points => points.push(nextStep))





    // state.update('points', points => points.push(nextPoint))
    //
    //
    // state.updateIn(['points', 0], point => point.set('name', 'newValue'))
    // state.get('points')
    // points = state.get('points');
    // returnetValue = points => points.push(nextPoint)
    // state.set('points', returnetValue(points));
    //
    // state.updateIn(['points', 0], point => point.set('name', 'newValue'))
    //
    //
    // state = state.update('points', points => points.push(nextPoint))

      
      return state




    // state.get('points').shift()
    // state = state.update('points', points => points.shift())
    // state = state.update('points', points => points.push(nextPoint))
    // const newPoint = {
    //   x: state.points.last().x + 25,
    //   y: state.points.last().y
    // }
    // state = state.update('points', points => points.push(newPoint))


    // state.points = points;

    default:
      return state
  }
}
