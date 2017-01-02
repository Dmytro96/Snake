import React, { PropTypes, Component } from 'react'

import Score  from '../components/score/Score'
import Area from '../components/area/Area'


export class App extends Component {
  render() {
    return (
      <div>
        <Score />
        <Area>
          {/* Snake and Eat here */}
        </Area>
      </div>
    )
  }
}
