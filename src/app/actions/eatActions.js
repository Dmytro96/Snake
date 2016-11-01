import { GENERATE_EAT_POSITION } from '../constants/eat.js'

export
  const generateEatPosition = (eatPosition) => {
    return {
      type: GENERATE_EAT_POSITION,
      payload: eatPosition
    }
  };
