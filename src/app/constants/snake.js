import Immutable from 'immutable'
import { getRandomIntBetweenMinMax } from '../utils/randomize.js'

export
  const
    UP = 'UP',
    LEFT = 'LEFT',
    DOWN = 'DOWN',
    RIGHT = 'RIGHT',
    FORWARD = 'FORWARD',

    MAX_SNAKE_LENGTH = 10,
    MIN_SNAKE_LENGTH = 3,

    AREA_SIZE = 500,
    COLUMNS = 20,
    STEP = AREA_SIZE / COLUMNS,

    DELAY = 100,

    // snake length computing [3 - 10]
    SNAKE_LENGTH = getRandomIntBetweenMinMax(MIN_SNAKE_LENGTH, MAX_SNAKE_LENGTH),

    DIRECTIONS_MAP = Immutable.fromJS({
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

    BUTTONS = Immutable.Map({
      37: LEFT,
      38: UP,
      39: RIGHT,
      40: DOWN
    }),

    INVERSE_DIRECTION = Immutable.Map({
      LEFT: RIGHT,
      RIGHT: LEFT,
      UP: DOWN,
      DOWN: UP
    }),

    WAYS = Immutable.List([LEFT, FORWARD, RIGHT]),
    DIRECTIONS = Immutable.List([UP, RIGHT, DOWN, LEFT]);

