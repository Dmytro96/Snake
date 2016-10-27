import { DIRECTION, DIRECTIONS_MAP, LEFT, UP, DOWN, RIGHT } from '../constants/snake.js'
import Immutable from 'immutable'

import generateRandomSnake from '../components/snake/generateRandomSnake.js'
import validationOfSnakeGeneration from '../components/snake/validationOfSnakeGeneration.js'
import stepInCourseOfWay from '../components/snake/stepInCourseOfWay.js'

const initialState = {
  // points: [
  //   {x: 50, y: 200},
  //   {x: 75, y: 200},
  //   {x: 75, y: 175},
  //   {x: 75, y: 150}
  // ],
  points: generateRandomSnake()
}

export default function snake(state = initialState, action) {

  console.log(state)
  const points = state.points
  switch (action.type) {
    case RIGHT:
      const nextStep = stepInCourseOfWay(action.type, FORWARD, state.points)
      state = state.get('points').shift()
      points.shift()
      points.push({
        x: points[points.length-1].x + 25,
        y: points[points.length-1].y
      })
      state = state.update('points', points => points.push(nextPoint))
    // state.get('points').shift()
    // state = state.update('points', points => points.shift())
    // state = state.update('points', points => points.push(nextPoint))
    // const newPoint = {
    //   x: state.points.last().x + 25,
    //   y: state.points.last().y
    // }
    // state = state.update('points', points => points.push(newPoint))


    // state.points = points;
      return {
        ...state
      }

      return {
        ...state
      }

    default:
      return state
  }
}
