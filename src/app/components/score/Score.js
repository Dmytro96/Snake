import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import './score.scss'

class Score extends Component {

  render() {
    const { score } = this.props;
    return (
      <div className='score'>
        <p>{score.get('count')}</p>
      </div>
    )
  }
}

Score.propTypes = {

};

const
  mapStateToProps = ({ score }) =>  ({
    score
  });

export default connect(mapStateToProps)(Score)
