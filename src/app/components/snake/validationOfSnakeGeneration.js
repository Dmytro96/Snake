import { AREA_SIZE } from '../../constants/snake.js'
const validationOfSnakeGeneration = (nextPoint, pointsOfSnake) => {

  const validationBorder = (nextPoint) => {
    if ( nextPoint.x < AREA_SIZE && nextPoint.x > 0 && nextPoint.y < AREA_SIZE && nextPoint.y > 0) {
      return true
    } else {
      return false
    }
  }

  const validationSelf = (nextPoint, pointsOfSnake) => {
    pointsOfSnake.forEach((item) => {
      if (item.x === nextPoint.x && item.y === nextPoint.y) {
        return false
      }
    })
    return true
  }

  return (validationBorder(nextPoint) && validationSelf(nextPoint, pointsOfSnake)) ? true : false
}
export default validationOfSnakeGeneration
