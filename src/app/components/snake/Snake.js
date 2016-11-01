import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { STEP, INVERSE_DIRECTION, BUTTONS, DELAY } from '../../constants/snake.js'
import { changeSnakeDirection, makeSnakeBigger } from '../../actions/snakeActions.js'
import { generateEatPosition } from '../../actions/eatActions'
import stepInCourseOfWay from '../../utils/stepInCourseOfWay'
import createPosition from '../../utils/createPosition'

import './snake.scss'


class Snake extends Component {

  static defaultProps = {
    width: STEP,
    height: STEP
  };

  snakeMove(event) {
    const
      { snake, eat } = this.props,
      eatPosition = eat.get('eatPosition'),
      snakeBack = snake.get('points').first(),
      snakeHead = snake.get('points').last(),

      oldDirection = snakeHead.get('turn'),
      inverseValidation = BUTTONS.get(String(event.keyCode)) !==
                          INVERSE_DIRECTION.get(String(oldDirection)),
      keysValidation = BUTTONS.keySeq().includes(String(event.keyCode));


    if (inverseValidation && keysValidation) {

      clearInterval(this.interval);

      if (snakeHead.get('validationPass')) {
        this.props.changeSnakeDirection(event.keyCode);
        if (snakeHead.get('x') === eatPosition.get('x')
          &&
          snakeHead.get('y') === eatPosition.get('y')) {
          this.props.makeSnakeBigger(
            stepInCourseOfWay(snake.get('points'), INVERSE_DIRECTION.get(String(snakeBack.get('turn'))))
          );
          this.props.generateEatPosition(createPosition(snake))
        }
        this.interval = setInterval( () => {

          if (snakeHead.get('x') === eatPosition.get('x')
            &&
            snakeHead.get('y') === eatPosition.get('y')) {
            this.props.makeSnakeBigger(
              stepInCourseOfWay(snake.get('points'), INVERSE_DIRECTION.get(String(snakeBack.get('turn'))))
            );
            this.props.generateEatPosition(createPosition(snake))
          }
          this.props.changeSnakeDirection(event.keyCode);
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
    const
      { width, height, snake } = this.props;

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
};

const
  mapStateToProps = ({ snake, eat }) =>  ({
    snake,
    eat
  }),
  mapDispatchToProps = dispatch => ({
    changeSnakeDirection: bindActionCreators(changeSnakeDirection, dispatch),
    makeSnakeBigger: bindActionCreators(makeSnakeBigger, dispatch),
    generateEatPosition: bindActionCreators(generateEatPosition, dispatch)
  });


export default connect(mapStateToProps, mapDispatchToProps)(Snake)
