import React, { PropTypes, Component } from 'react'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    x: 0,
    y: 0,
    points: '0,0 50,25',
    direction: 'RIGHT_DIRECTION'
  }

  render() {
    console.log(this)
    const { x, y, points } = this.props
    return (
      <polyline className='snake'
                x={x} y={y}
                points={points}
                >

      </polyline>
    )
  }
}

Snake.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  points: PropTypes.string,
  direction: PropTypes.string.isRequired
}
