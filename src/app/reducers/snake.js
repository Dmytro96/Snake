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
  points: generateRandomSnake(),
  direction: UP
}
// export default handleActions({
//   DOWN: (state, action) => ({
//     state: state.update('points', points => points.push(nextPoint)),
//     direction: DOWN
//   })
// })

export default function snake(state = initialState, action) {
  // const direction = DIRECTIONS_MAP.get()
  // const pointsList = Immutable.List(state.points)
  console.log(state)

  const points = state.points
  switch (action.type) {
    case RIGHT:
    points.shift()
    points.push({
      x: points[points.length-1].x + 25,
      y: points[points.length-1].y
    })
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
        ...state,
        direction: RIGHT
      }
    case DOWN:
      points.shift()
      points.push({
        x: points[points.length-1].x,
        y: points[points.length-1].y + 25
      })
      return {
        ...state,
        direction: DOWN
      }
    case LEFT:
      points.shift()
      points.push({
        x: points[points.length-1].x - 25,
        y: points[points.length-1].y
      })
      return {
        ...state,
        direction: LEFT
      }
    case UP:
      points.shift()
      points.push({
        x: points[points.length-1].x,
        y: points[points.length-1].y - 25
      })
      return {
        ...state,
        direction: UP
      }
    // case DOWN:
    //   state.points.shift()
    //   nextPoint = stepInCourseOfWay( DOWN, FORWARD, state.points)
    //   state.points.push(nextPoint)
    //     return {
    //       ...state
    //     }
    // case RIGHT:
    //   state.points.shift()
    //   // let currentPoint = state.points[state.points.length-1]
    //   // const direction = DIRECTIONS_MAP.get('UP_RIGHT')
    //   // let nextPoint = {
    //   //   x: currentPoint.x + direction.x,
    //   //   y: currentPoint.y + direction.y
    //   // }
    //
    //   [nextPoint, turn, validationPass] = stepInCourseOfWay(
    //                                           UP,
    //                                           RIGHT,
    //                                           state.points
    //                                         )
    //
    //   state.points.push(nextPoint)
    //   return {
    //     ...state
    //   }
    // case UP:
    //   state.points.shift()
    //   [nextPoint, turn, validationPass] = stepInCourseOfWay(
    //                                           LEFT,
    //                                           RIGHT,
    //                                           state.points
    //                                         )
    //   state.points.push(nextPoint)
    //   if (!validationPass) {
    //   }
    //   return {
    //     ...state
    //   }
    // case LEFT:
    //   state.points.shift()
    //   [nextPoint, turn, validationPass] = stepInCourseOfWay(
    //                                           UP,
    //                                           LEFT,
    //                                           state.points
    //                                         )
    //                                         state.points.push(nextPoint)
    //   if (validationPass) {
    //   }
    //   return {
    //     ...state
    //   }
    default:
      return state
  }
}
