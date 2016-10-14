import React, { PropTypes, Component } from 'react'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    // x: 0,
    // y: 12.5,
    // points: '0,12.5 50,12.5',
    points: [0,12.5, 50, 12.5],
    direction: 'RIGHT_DIRECTION'
  }

  render() {
    const { x, y, points } = this.props
    let pointsStr = ''

    for (var i = 0; i < points.length; i++) {
      if ( i % 2 == 0 ) {
        pointsStr +=  points[i]
      } else {
        pointsStr += `,${points[i]} `
      }
    }

    return (
      <polyline className='snake'
                // x={x} y={y}
                points={pointsStr}
                >

      </polyline>
    )
  }
}

Snake.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  points: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired
}
