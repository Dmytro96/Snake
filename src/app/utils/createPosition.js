import Immutable from 'immutable'
import { generateRandomPointOnMap } from './randomize.js';

const
  createPosition = snake => {

    const validationSelf = (eatPos, pointsOfSnake) =>
        pointsOfSnake.find( item =>
        (
          item.get('x') === eatPos.get('x')
          &&
          item.get('y') === eatPos.get('y')
        )
      );

    let eatPosition = Immutable.Map({
      x: generateRandomPointOnMap(),
      y: generateRandomPointOnMap()
    });

    while (validationSelf(eatPosition, snake.get('points'))){
      eatPosition = Immutable.Map({
        x: generateRandomPointOnMap(),
        y: generateRandomPointOnMap()
      });
    }

    return eatPosition;
  };
export default createPosition
