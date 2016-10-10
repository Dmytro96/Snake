import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }
  onSnakeClick(e) {
    this.props.addSnake(0)
  }

  render() {
    const { width, height, x } = this.props
    return (
      <rect className='snake'
            width={width}
            height={height}
            x={x}
            onClick={::this.onSnakeClick}>
      </rect>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  onSnakeClick: PropTypes.func
};
