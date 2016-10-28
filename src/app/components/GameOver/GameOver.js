import React, { PropTypes, Component } from 'react';
import './gameOver.scss'

import { AREA_SIZE } from '../../constants/snake.js'

export default class GameOver extends Component {

  render() {

    return (
      <g className='game-over'>
        <text className='text'>
          Game Over
        </text>


      </g>
    )
  }
}

GameOver.propTypes = {
}
