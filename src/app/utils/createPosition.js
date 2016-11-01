import Immutable from 'immutable'
import { generateRandomPointOnMap } from './randomize.js';

const
  createPosition = () => Immutable.Map({
   x: generateRandomPointOnMap(),
   y: generateRandomPointOnMap()
 });

export default createPosition
