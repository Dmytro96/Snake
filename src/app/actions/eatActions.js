import { createActions } from 'redux-actions'
import { GENERATE_EAT_POSITION } from '../constants/eat.js'

export
  const
    { generateEatPosition } =
      createActions({
        [GENERATE_EAT_POSITION]: eatPosition => eatPosition
      });
