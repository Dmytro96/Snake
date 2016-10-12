import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let name
    let oldKeyCode
    document.addEventListener('keydown', event => {
      clearInterval(name)
      if ( event.keyCode == 40 ||
           event.keyCode == 39 ||
           event.keyCode == 38 ||
           event.keyCode == 37
         ) {
             oldKeyCode = event.keyCode
             this.props.changeSnakeDirection(event.keyCode)
             name = setInterval( () => {
               this.props.changeSnakeDirection(event.keyCode)
             }, 300)
      } else {
          this.props.changeSnakeDirection(oldKeyCode)
          name = setInterval( () => {
            this.props.changeSnakeDirection(oldKeyCode)
          }, 300)
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
