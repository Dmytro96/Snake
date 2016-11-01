import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Immutable from 'immutable'

import { STEP, INVERSE_DIRECTION, BUTTONS, DELAY } from '../../constants/snake.js'
import { changeSnakeDirection } from '../../actions/snakeActions.js'
import './snake.scss'

const
  mapStateToProps = ({ snake }) =>  ({
    snake
  }),
  mapDispatchToProps = dispatch => ({
    changeSnakeDirection: bindActionCreators(changeSnakeDirection, dispatch)
  });


class
Snake extends Component {

  static defaultProps = {
    width: STEP,
    height: STEP
  };

  snakeMove(event) {
    const
      { snake } = this.props,
      lastPoint = snake.get('points').last(),

      oldDirection = lastPoint.get('turn'),
      inverseValidation = BUTTONS.get(String(event.keyCode)) !==
                          INVERSE_DIRECTION.get(String(oldDirection)),
      keysValidation = BUTTONS.keySeq().includes(String(event.keyCode))

    if (inverseValidation && keysValidation) {

      clearInterval(this.interval)

      if (lastPoint.get('validationPass')) {
        this.props.changeSnakeDirection(event.keyCode)
        this.interval = setInterval( () => {
          this.props.changeSnakeDirection(event.keyCode)
        }, DELAY)
      }

    }
  }


  componentDidMount() {
    document.addEventListener('keydown', this.snakeMove.bind(this))
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.snakeMove.bind(this))
  }

  render() {
    const { width, height, snake } = this.props
    return (
        <g>
          {
            snake.get('points').map((item, index) =>
              <rect className = 'snake'
                key = {index}
                width = {width}
                height = {height}
                x = {item.get('x')}
                y = {item.get('y')}
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
