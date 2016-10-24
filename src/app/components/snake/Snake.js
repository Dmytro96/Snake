import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import generateRandomSnake from './generateRandomSnake.js'
import { STEP, DIRECTIONS_MAP } from '../../constants/snake.js'
import { changeSnakeDirection } from '../../actions/snakeActions.js'
import './snake.scss'


const mapStateToProps = ({ snake }) =>  ({
        snake
      })

function mapDispatchToProps(dispatch) {
  return {
    changeSnakeDirectionFunc: bindActionCreators(changeSnakeDirection, dispatch)
  }
}

class Snake extends Component {


  static defaultProps = {
    width: STEP,
    height: STEP,
    // points: generateRandomSnake()
    // points: [
    //   {x: 50, y: 200},
    //   {x: 75, y: 200},
    //   {x: 75, y: 175},
    //   {x: 75, y: 150}
    // ]
  }


  renderSnakeBlocks = () => {
    return (
      this.props.snake.points.map((item, index) => {
        return (
          <rect className = 'snake'
          key = {index}
          width = {this.props.width}
          height = {this.props.height}
          x = {item.x}
          y = {item.y}
          />
        )
      })
    )
  }

  componentDidMount() {
    // this.generalInterval
    // this.vectorX = true
    //
    // this.move = (keyCode) => {
    //   clearInterval(this.generalInterval)
    //   this.props.changeSnakeDirection(keyCode)
    //   this.generalInterval = setInterval( () => {
    //     this.props.changeSnakeDirection(keyCode)
    //   }, 300)
    //   this.vectorX = !this.vectorX
    // }

    document.addEventListener('keydown', event => {
      clearInterval(interval)
      const interval = setInterval( () => {
        this.props.changeSnakeDirectionFunc(event.keyCode)
      }, 300);

      // if (this.vectorX == true && (event.keyCode == 39 || event.keyCode == 37)) {
      //   this.move(event.keyCode)
      // } else if (this.vectorX == false && (event.keyCode == 38 || event.keyCode == 40)) {
      //   this.move(event.keyCode)
      // }

    })
  }


  render() {
    const { snake } = this.props
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
  changeSnakeDirection: PropTypes.func
  // points: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Snake)
