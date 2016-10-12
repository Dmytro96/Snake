import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let name
    let oldKeyCode

    let move = (keyCode) => {
      oldKeyCode = keyCode
      this.props.changeSnakeDirection(keyCode)
      name = setInterval( () => {
        this.props.changeSnakeDirection(keyCode)
      }, 300)
    }

    document.addEventListener('keydown', event => {
      clearInterval(name)
      switch (event.keyCode) {
        case 37:
        case 38:
        case 39:
        case 40:
          move(event.keyCode)
          break
        default:
          move(oldKeyCode)
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
