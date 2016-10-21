import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Score from '../components/score/Score.js'
import Area from '../components/area/Area.js'

import * as scoreActions from '../actions/scoreActions.js'
import * as snakeActions from '../actions/snakeActions.js'

export class App extends Component {
  render() {
    return (
      <div>
        <Score />
        <Area>
          {/* Snake here */}
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
