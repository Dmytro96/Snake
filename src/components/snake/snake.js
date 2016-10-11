import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }


  onSnakeClick(event) {
    setInterval(() => {
      this.props.changeSnakeDirection(1)
    }, 500)
  }


  render() {
    const { width, height, x, y, direction } = this.props
    return (
      <rect className='snake'
            width={width} height={height}
            x={x} y={y}
            direction={direction}
            onMouseDown={::this.onSnakeClick} >40
      </rect>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onSnakeClick: PropTypes.func
}
