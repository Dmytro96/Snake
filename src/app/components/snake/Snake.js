import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Immutable from 'immutable'
import generateRandomSnake from './generateRandomSnake.js'
import { STEP, DIRECTIONS_MAP, INVERSE_DIRECTION, DIRECTION } from '../../constants/snake.js'
import { changeSnakeDirection } from '../../actions/snakeActions.js'
import './snake.scss'

const
  mapStateToProps = ({ snake }) =>  ({
    snake
  })

const
  mapDispatchToProps = dispatch => ({
    changeSnakeDirection: bindActionCreators(changeSnakeDirection, dispatch)
  })


class Snake extends Component {

  static defaultProps = {
    width: STEP,
    height: STEP
  }

  componentDidMount() {
    const { snake } = this.props
    console.log(snake)
    console.log('11111')

    const oldDirection = snake.get('points').last().get('directionPoint')

    document.addEventListener('keydown', event => {
      clearInterval(this.interval)

      if (DIRECTION.get(String(event.keyCode)) !== INVERSE_DIRECTION.get(String(oldDirection))) {

        this.props.changeSnakeDirection(event.keyCode)

        this.interval = setInterval( () => {
          this.props.changeSnakeDirection(event.keyCode)
        }, 500);
      }


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
