import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    width: '25',
    height: '25',
    x: 0,
    y: 0,
    direction: 'RIGHT_DIRECTION'
  }

  componentDidMount() {
    this.generalInterval
    this.vectorX = true

    this.move = (keyCode) => {
      clearInterval(this.generalInterval)
      this.props.changeSnakeDirection(keyCode)
      this.generalInterval = setInterval( () => {
        this.props.changeSnakeDirection(keyCode)
      }, 300)
      this.vectorX = !this.vectorX
    }

    document.addEventListener('keydown', event => {

      if (this.vectorX == true && (event.keyCode == 39 || event.keyCode == 37)) {
        this.move(event.keyCode)
      } else if (this.vectorX == false && (event.keyCode == 38 || event.keyCode == 40)) {
        this.move(event.keyCode)
      }

    })
  }

  render() {
    const { width, height, x, y, direction } = this.props
    return (
      <rect className='snake'
            width={width} height={height}
            x={x} y={y}
            direction={direction}
      >
      </rect>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  changeSnakeDirection: PropTypes.func
}
