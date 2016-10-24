import { Map } from 'immutable'
export
const
  UP = 'UP',
  LEFT = 'LEFT',
  DOWN = 'DOWN',
  RIGHT = 'RIGHT',
  FORWARD = 'FORWARD',

  MAX_SNAKE_LENGTH = 10,
  MIN_SNAKE_LENGTH = 3,

  STEP = 25,

  AREA_SIZE = 500,

  START_BREAK = 0,
  END_BERAK = AREA_SIZE - STEP,

  DIRECTIONS_MAP = Map({
      'UP_LEFT'   : { x: -25, y: 0, turn: LEFT },
      'UP_FORWARD': { x: 0, y: -25, turn: UP },
      'UP_RIGHT'  : { x: 25, y: 0, turn: RIGHT },

      'RIGHT_LEFT': { x: 0, y: -25, turn: UP },
      'RIGHT_FORWARD': { x: 25, y: 0, turn: RIGHT },
      'RIGHT_RIGHT': { x: 0, y: 25, turn: DOWN },

      'DOWN_LEFT': { x: 25, y: 0, turn: RIGHT },
      'DOWN_FORWARD': { x: 0, y: 25, turn: DOWN },
      'DOWN_RIGHT': { x: -25, y: 0, turn: LEFT },

      'LEFT_LEFT': { x: 0, y: 25, turn: DOWN },
      'LEFT_FORWARD': { x: -25, y: 0, turn: LEFT },
      'LEFT_RIGHT': { x: 0, y: -25, turn: UP }
  }),

  DIRECTION = {
    37: LEFT,
    38: UP,
    39: RIGHT,
    40: DOWN
  },

  WAYS = [LEFT, FORWARD, RIGHT],
  DIRECTIONS = [UP, RIGHT, DOWN, LEFT]
