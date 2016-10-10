  import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Score from '../components/Score/index.js'
import Area from '../components/Area/index.js'
import Snake from '../components/Snake/index.js'
import * as scoreActions from '../actions/scoreActions.js'

export class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { score } = this.props
    const { setScore } = this.props.scoreActions
    return (
      <div>
        <Score count={score.count} setScore={setScore}/>
        <Area>
          <Snake/>
        </Area>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    score: state.score
  }
}

function mapDispatchToProps(dispatch) {
  return {
    scoreActions: bindActionCreators(scoreActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
