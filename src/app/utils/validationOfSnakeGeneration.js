import { AREA_SIZE } from '../constants/snake.js'
const validationOfSnakeGeneration = (nextPoint, pointsOfSnake) => {

  const
    validationBorder = (nextPoint) =>
      nextPoint.get('x') < AREA_SIZE && nextPoint.get('x') >= 0
      &&
      nextPoint.get('y') < AREA_SIZE && nextPoint.get('y') >= 0,


    validationSelf = (nextPoint, pointsOfSnake) =>
      !pointsOfSnake.find(item =>
        (item.get('x') === nextPoint.get('x')
        &&
        item.get('y') === nextPoint.get('y'))
      );

  return (validationBorder(nextPoint) && validationSelf(nextPoint, pointsOfSnake)) ? true : false
};
export default validationOfSnakeGeneration
