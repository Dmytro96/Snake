import React, { PropTypes, Component } from 'react'
import { generateRandomSnake } from './generateRandomSnake.js'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    width: 25,
    height: 25,
    points: generateRandomSnake()
  }


  render() {
    const { width, height, points } = this.props

    let readyArrayOfSnakeBlocks = points.map((item, index) => {
      return (
        <rect key={index} className='snake'
        width='25' height='25'
        x={item.x} y={item.y} />
      )
    })

    return (
        <g>
          { readyArrayOfSnakeBlocks }
        </g>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  points: PropTypes.array.isRequired
}
