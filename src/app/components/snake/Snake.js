import React, { PropTypes, Component } from 'react'
import { generateRandomSnake } from './generateRandomSnake.js'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    width: 25,
    height: 25,
    points: generateRandomSnake()
  }

  makeReadyArrayOfSnakeBlocks = (points, width, height) => {
    let readyArrayOfSnakeBlocks = points.map((item, index) => {
      return (
        <rect key={index} className='snake'
        width={width} height={height}
        x={item.x} y={item.y} />
      )
    })
    return readyArrayOfSnakeBlocks
  }

  render() {
    const { width, height, points } = this.props

    return (
        <g>
          { this.makeReadyArrayOfSnakeBlocks(points, width, height) }
        </g>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  points: PropTypes.array.isRequired
}
