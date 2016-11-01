import React, { PropTypes as pt, Component } from 'react'
import Immutable from 'immutable'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { generateEatPosition } from '../../actions/eatActions'
import { makeSnakeBigger } from '../../actions/snakeActions'
import createPosition from '../../utils/createPosition.js'

import { STEP } from '../../constants/snake.js'
import './eat.scss'

class Eat extends Component {
  // constructor() {
  //
  // }

  static defaultProps = {
    width: STEP,
    height: STEP
  };

  componentDidMount() {

      // snakeHead = snake.get('points').last(),
      // eatPosition = eat.get('eatPosition');

    const { snake } = this.props;


    let eatPosition = createPosition();

    const validationSelf = (eatPos, pointsOfSnake) =>
      pointsOfSnake.find(item =>
        (item.get('x') === eatPos.get('x')
        &&
        item.get('y') === eatPos.get('y'))
      );

    while (validationSelf( eatPosition, snake.get('points'))){
      eatPosition = createPosition();
    }
    generateEatPosition(eatPosition);
  }

  render() {
    const { width, height, eat } = this.props;

    return (
      <g>
        <rect className='eat'
          width = {width}
          height = {height}
          x = {eat.get('eatPosition').get('x')}
          y = {eat.get('eatPosition').get('y')}
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
    makeSnakeBigger: bindActionCreators(makeSnakeBigger, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Eat)
