import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Score from '../components/score/score.js'
import Area from '../components/area/area.js'
import Snake from '../components/snake/snake.js'
import * as scoreActions from '../actions/scoreActions.js'
import * as snakeActions from '../actions/snakeActions.js'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { score, snake, x, y, direction } = this.props
    const { setScore } = this.props.scoreActions
    const { changeSnakeDirection } = this.props.snakeActions
    return (
      <div>
        <Score count={score.count} setScore={setScore}/>
        <Area>
          <Snake width={snake.width} height={snake.height}
                 x={snake.x} y={snake.y}
                 direction={snake.direction}
                 changeSnakeDirection={changeSnakeDirection} />
        </Area>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    score: state.score,
    snake: state.snake
  }
}

function mapDispatchToProps(dispatch) {
  return {
    scoreActions: bindActionCreators(scoreActions, dispatch),
    snakeActions: bindActionCreators(snakeActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
