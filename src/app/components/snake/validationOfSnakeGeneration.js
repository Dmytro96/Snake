import { AREA_SIZE } from '../../constants/snake.js'
const validationOfSnakeGeneration = (nextPoint, pointsOfSnake) => {

  const validationBorder = (nextPoint) =>
    nextPoint.get('x') < AREA_SIZE && nextPoint.get('x') > 0
    &&
    nextPoint.get('x') < AREA_SIZE && nextPoint.get('y') > 0


  const validationSelf = (nextPoint, pointsOfSnake) =>
    !pointsOfSnake.find(item =>
      (item.x === nextPoint.get('x')
      &&
      item.y === nextPoint.get('y'))
    )

  return (validationBorder(nextPoint) && validationSelf(nextPoint, pointsOfSnake)) ? true : false
}
export default validationOfSnakeGeneration
