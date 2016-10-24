import { DIRECTION, DIRECTIONS_MAP, LEFT, UP, DOWN, RIGHT } from '../constants/snake.js'
import { Map } from 'immutable'
import { generateRandomSnake } from '../components/snake/generateRandomSnake.js'
import validationOfSnakeGeneration from '../components/snake/validationOfSnakeGeneration.js'
import stepInCourseOfWay from '../components/snake/stepInCourseOfWay.js'

const initialState = {
  points: [],
}

export default function snake (state = initialState, action) {
  const myArr = state.points
  const direction = DIRECTIONS_MAP.get()
  let nextPoint,
      turn,
      validationPass
  switch (action.type) {
    case DOWN:
      state.points.shift()
      [nextPoint, turn, validationPass] = stepInCourseOfWay(
                                                            RIGHT,
                                                            RIGHT,
                                                            state.points
                                                          )

      state.points.push(nextPoint)
      if (validationPass) {
      }
        return {
          ...state
        }
    case RIGHT:
      state.points.shift()
      // let currentPoint = state.points[state.points.length-1]
      // const direction = DIRECTIONS_MAP.get('UP_RIGHT')
      // let nextPoint = {
      //   x: currentPoint.x + direction.x,
      //   y: currentPoint.y + direction.y
      // }

      [nextPoint, turn, validationPass] = stepInCourseOfWay(
                                              UP,
                                              RIGHT,
                                              state.points
                                            )

      state.points.push(nextPoint)
      return {
        ...state
      }
    case UP:
      state.points.shift()
      [nextPoint, turn, validationPass] = stepInCourseOfWay(
                                              LEFT,
                                              RIGHT,
                                              state.points
                                            )
      state.points.push(nextPoint)
      if (!validationPass) {
      }
      return {
        ...state
      }
    case LEFT:
      state.points.shift()
      [nextPoint, turn, validationPass] = stepInCourseOfWay(
                                              UP,
                                              LEFT,
                                              state.points
                                            )
                                            state.points.push(nextPoint)
      if (validationPass) {
      }
      return {
        ...state
      }
    default:
      return state
  }
}
