import React, { PropTypes, Component } from 'react'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    points: [ 0,12.5, 25,12.5 ],
    direction: 'RIGHT_DIRECTION'
  }

  state = {
    points: this.props.points
  }

  render() {
    const { points } = this.state
    let pointsStr = ''

    for (var i = 0; i < points.length; i++) {
      pointsStr += ( i % 2 === 0 ) ? points[i] : `,${points[i]} `
    }

    return (
      <polyline className='snake'
                points={pointsStr}
                >

      </polyline>
    )
  }
}

Snake.propTypes = {
  points: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired
}
