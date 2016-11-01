import React, { PropTypes, Component } from 'react';
import './gameOver.scss'

export class GameOver extends Component {

  render() {

    return (
      <g className='game-over'>
        <text>
          Game Over
        </text>


      </g>
    )
  }
}

GameOver.propTypes = {
};
