import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let generalInterval
    let oldKeyCode
    let vectorX = true

    let move = (keyCode) => {
      clearInterval(generalInterval)
      oldKeyCode = keyCode
      this.props.changeSnakeDirection(keyCode)
      generalInterval = setInterval( () => {
        this.props.changeSnakeDirection(keyCode)
      }, 300)
      vectorX = !vectorX
    }

    document.addEventListener('keydown', event => {

      if (vectorX == true && (event.keyCode == 39 || event.keyCode == 37)) {
        console.log(vectorX + '   vectorX - TRUE')
        move(event.keyCode)
      } else if (vectorX == false && (event.keyCode == 38 || event.keyCode == 40)) {
        console.log(vectorX + '    vectorX - FALSE')
        move(event.keyCode)
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
