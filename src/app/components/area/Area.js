import React, { PropTypes, Component } from 'react';
import './area.scss'
import Snake from '../snake/Snake.js'
import { AREA_SIZE } from '../../constants/snake.js'

export default class Area extends Component {

  static defaultProps = {
    width: AREA_SIZE,
    height: AREA_SIZE
  }

  render() {
    const { width, height } = this.props
    return (
      <div className='area'>
        <svg width={width} height={height}>
          <g>
            <rect width={width} height={height}></rect>
            <Snake/>
          </g>
        </svg>
      </div>
    )
  }
}

Area.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
