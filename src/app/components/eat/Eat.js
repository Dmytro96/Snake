import React, { PropTypes as pt, Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { generateEatPosition } from '../../actions/eatActions'
import { makeSnakeBigger } from '../../actions/snakeActions'
import createPosition from '../../utils/createPosition.js'

import { STEP } from '../../constants/snake.js'
import './eat.scss'

class Eat extends Component {

  componentDidMount() {
    const
      { snake } = this.props,
      eatPosition = createPosition(snake);

    this.props.generateEatPosition(eatPosition)
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
    makeSnakeBigger: bindActionCreators(makeSnakeBigger, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Eat)
