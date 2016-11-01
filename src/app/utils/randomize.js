import Immutable from 'immutable'
import { COLUMNS, STEP } from '../constants/snake.js'

export
  const
    random = Math.random(),

    randomOfList = (ways) => ways.get(Math.floor(Math.random()*(ways.size-1))),

    getRandomIntBetweenMinMax = (min, max) => Math.floor(Math.random() * (max - min) + min),

    generateRandomPointOnMap = () => Math.floor(Math.random() * (COLUMNS - 1)) * STEP
