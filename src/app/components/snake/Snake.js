import React, { PropTypes, Component } from 'react'
import { generateRandomSnake } from './generateRandomSnake.js'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    points: generateRandomSnake(),
    // points: [ 50,62.5,  75,62.5,  100,62.5, 87.5,62.5,  87.5,100,  87.5,87.5,  125,87.5,  112.5,87.5,  112.5,125,  112.5,150,  112.5,137.5,  150,137.5,  137.5,137.5,  137.5,100,    137.5, 87.5,  175,87.5 ],
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
