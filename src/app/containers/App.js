import React, { PropTypes, Component } from 'react'
import Score from '../components/score/Score.js'
import Area from '../components/area/Area.js'
import Snake from '../components/snake/Snake.js'

export class App extends Component {
  render() {
    return (
      <div>
        <Score />
        <Area >
          <Snake />
        </Area>
      </div>
    )
  }
}
