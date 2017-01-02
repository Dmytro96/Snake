import React, { PropTypes, Component } from 'react'
import {connect} from 'react-redux';

import Snake from '../snake/Snake.js'
import Eat  from '../eat/Eat.js'
import {GameOver} from '../gameOver/GameOver'

import { AREA_SIZE } from '../../constants/snake.js'
import './area.scss'

export class Area extends Component {

  static defaultProps = {
    width: AREA_SIZE,
    height: AREA_SIZE
  };

  render() {
    const { width, height, snakeAlive, snakeLength } = this.props;

    return (
      <div className='area'>
        <svg
          width={width}
          height={height} >

          {!snakeAlive || snakeLength > 99 ?
            <GameOver
              snakeLength={snakeLength}
              width={width}
              height={height}
            />
            :
            <g>
              <rect
                width={width}
                height={height}
              />
              <Snake />
              <Eat />
            </g>
          }

        </svg>
      </div>
    )
  }
}

Area.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};


const
  mapStateToProps = ( {snake} ) =>  ({
    snakeAlive: snake.get('snakeAlive'),
    snakeLength: snake.get('points').size
  });


export default connect(mapStateToProps)(Area)
