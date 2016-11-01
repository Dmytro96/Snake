import React, { PropTypes as pt, Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { generateEatPosition } from '../../actions/eatActions'
import { makeSnakeBigger } from '../../actions/snakeActions'
import { setScore } from '../../actions/scoreActions'
import stepInCourseOfWay from '../../utils/stepInCourseOfWay'
import createPosition from '../../utils/createPosition'

import { STEP, INVERSE_DIRECTION } from '../../constants/snake.js'
import './eat.scss'

class Eat extends Component {

  snakeOverEat() {
    const
      { snake, eat } = this.props,
      eatPosition = eat.get('eatPosition'),
      snakeBack = snake.get('points').first(),
      snakeHead = snake.get('points').last(),
      snakePointsReverse = snake.get('points').reverse();

    if (snakeHead.get('x') === eatPosition.get('x')
      &&
      snakeHead.get('y') === eatPosition.get('y')) {
      this.props.makeSnakeBigger(
        stepInCourseOfWay(snakePointsReverse, INVERSE_DIRECTION.get(String(snakeBack.get('turn'))))
      );
      this.props.generateEatPosition(createPosition(snake));
      this.props.setScore();
    }
  }


  componentDidMount() {
    const
      { snake } = this.props,
      eatPosition = createPosition(snake);

    this.props.generateEatPosition(eatPosition);

    setInterval(this.snakeOverEat.bind(this), 10);
  }

  static defaultProps = {
    width: STEP,
    height: STEP
  };

  render() {
    const { width, height, eat } = this.props;

    return (
      <g>
        <rect className='eat'
          width = {width}
          height = {height}
          x = {eat.getIn(['eatPosition', 'x'])}
          y = {eat.getIn(['eatPosition', 'y'])}
        />
      </g>
    )
  }
}

Eat.propTypes = {
  width: pt.number.isRequired,
  height: pt.number.isRequired,
  generateEatPosition: pt.func
};

const
  mapStateToProps = ({ eat, snake }) =>  ({
    eat,
    snake
  }),
  mapDispatchToProps = dispatch => ({
    generateEatPosition: bindActionCreators(generateEatPosition, dispatch),
    makeSnakeBigger: bindActionCreators(makeSnakeBigger, dispatch),
    setScore: bindActionCreators(setScore, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Eat)
