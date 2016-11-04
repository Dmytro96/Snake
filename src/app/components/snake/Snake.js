import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { STEP, INVERSE_DIRECTION, BUTTONS, DELAY } from '../../constants/snake.js'
import { snakeDirectionUp, snakeDirectionDown, snakeDirectionRight, snakeDirectionLeft,
          makeSnakeBigger } from '../../actions/snakeActions'


import './snake.scss'


export class Snake extends Component {
  constructor(props) {
    super(props);
    this.snakeMove = this.snakeMove.bind(this)
  }

  static defaultProps = {
    width: STEP,
    height: STEP
  };

  snakeMove(event) {
    const
      { snake, eat } = this.props,
      eatPosition = eat.get('eatPosition'),
      snakeHead = snake.get('points').last(),
      oldDirection = snakeHead.get('turn'),

      inverseValidation = BUTTONS.get(String(event.keyCode)) !==
                          INVERSE_DIRECTION.get(String(oldDirection)),
      keysValidation = BUTTONS.keySeq().includes(String(event.keyCode));

    if (inverseValidation && keysValidation) {

      clearInterval(this.interval);

      if (snakeHead.get('validationPass')) {

        this.props.snakeDirectionActions[BUTTONS.get(String(event.keyCode))]();

        this.interval = setInterval( () => {
          this.props.snakeDirectionActions[BUTTONS.get(String(event.keyCode))]();
        }, DELAY)
      }
    }
  }


  componentDidMount() {
    document.addEventListener('keydown', this.snakeMove)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.snakeMove)
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
    snakeDirectionActions: {
      UP: bindActionCreators(snakeDirectionUp, dispatch),
      RIGHT: bindActionCreators(snakeDirectionRight, dispatch),
      DOWN: bindActionCreators(snakeDirectionDown, dispatch),
      LEFT: bindActionCreators(snakeDirectionLeft, dispatch)
    },
    makeSnakeBigger: bindActionCreators(makeSnakeBigger, dispatch)
  });


export default connect(mapStateToProps, mapDispatchToProps)(Snake)
