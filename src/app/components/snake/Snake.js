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

const mapDispatchToProps = dispatch => ({
      changeSnakeDirection: bindActionCreators(changeSnakeDirection, dispatch)
      })


class Snake extends Component {

  static defaultProps = {
    width: STEP,
    height: STEP
  }

  componentDidMount() {
    const { snake } = this.props

    document.addEventListener('keydown', event => {
      clearInterval(this.interval)

      this.interval = setInterval( () => {
        this.props.changeSnakeDirection(event.keyCode)
      }, 500);

    })
  }


  render() {
    const { width, height, snake } = this.props

    return (
        <g>
          {
            snake.points.map((item, index) =>
              <rect className = 'snake'
                key = {index}
                width = {width}
                height = {height}
                x = {item.x}
                y = {item.y}
              />
            )
          }
        </g>
    )
  }
}
Snake.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  changeSnakeDirection: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Snake)
