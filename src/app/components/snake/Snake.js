import React, { PropTypes, Component } from 'react'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    points: [ 0,12.5,  25,12.5,  37.5,12.5,  37.5,25,  37.5,37.5,  75,37.5 ],
    direction: 'RIGHT_DIRECTION'
  }

  state = {
    points: this.props.points
  }

  render() {
    const { points } = this.state
    let pointsStr = ''


    points.forEach((el, i) => {
      pointsStr += ( i % 2 === 0 ) ? el : `,${el} `
    })

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
