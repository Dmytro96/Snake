import React, { PropTypes, Component } from 'react'
import './score.scss'

export default class Score extends Component {

  static defaultProps = {
    score: 0
  }

  render() {
    const score = this.props.score
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
