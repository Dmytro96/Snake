import React, { PropTypes, Component } from 'react'
import './score.scss'

export default class Score extends Component {

  static defaultProps = {
    score: 0
  }

  state = {
    score: this.props.score
  }

  render() {
    const score = this.state.score
    return (
      <div className='score'>
        <p>{score}</p>
      </div>
    )
  }
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
}
