import React, {PropTypes} from 'react'
import './snake.scss'

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
    // document.addEventListener('click', function(){
    //
    // })
  }

  // _onSnakeClick(event) {
  //   setInterval(() => {
  //     console.log(event)
  //     this.props.changeSnakeDirection(1)
  //   }, 500)
  // }


  componentDidMount() {
    let self = this
    let name;
    document.onkeydown = function(event) {
      clearInterval(name)
      name = setInterval(function () {
        self.props.changeSnakeDirection(event.keyCode)
      }, 500);
    }
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
