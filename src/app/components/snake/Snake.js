import React, { PropTypes, Component } from 'react'
import generateRandomSnake from './generateRandomSnake.js'
import { STEP } from '../../constants/snake.js'
import './snake.scss'

export default class Snake extends Component {

  static defaultProps = {
    width: STEP,
    height: STEP,
    points: generateRandomSnake()
  }

  renderSnakeBlocks = () => {
    return (
      this.props.points.map((item, index) => {
        return (

          <rect key={index}
          className='snake'
          width={this.props.width}
          height={this.props.height}
          x={item.x}
          y={item.y} />
          
        )
      })
    )
  }

  render() {
    return (
        <g>
          { this.renderSnakeBlocks() }
        </g>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  points: PropTypes.array.isRequired
}
