import Immutable from 'immutable'
import { COLUMNS, STEP } from '../constants/snake.js'

// default Random
export const random = Math.random()

// random course of [left, forward, right]
export
  const
    randomOfList = (ways) => ways.get(Math.floor(Math.random()*(ways.size-1)))

export
  const
    getRandomIntBetweenMinMax = (min, max) => Math.floor(Math.random() * (max - min) + min)


export
  const
    generateRandomPointOnMap = () => Math.floor(Math.random() * (COLUMNS - 1)) * STEP
