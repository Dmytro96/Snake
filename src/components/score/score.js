import React, {PropTypes} from 'react'
import './score.scss'

let a = 0

export default class Score extends React.Component {
  constructor(props) {
    super(props);
  }

  onCountBtnClick(e) {
    this.props.setScore(++a)
  }

  render() {
    const { count } = this.props
    return (
      <div className='score'>
        <p>Your score is {count}</p>
        <button onClick={::this.onCountBtnClick}>Start</button>
      </div>
    )
  }
}

Score.propTypes = {
  count: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired
}
