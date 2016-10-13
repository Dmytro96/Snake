import React, { PropTypes, Component } from 'react';
import './area.scss'
import Snake from '../snake/Snake.js'

export default class Area extends Component {

  static defaultProps = {
    width: 500,
    height: 500
  }

  render() {
    const { width, height } = this.props
    return (
      <div className='area'>
        <svg width={width} height={height}>
          <g>
            <rect width={width} height={height}></rect>
            {this.props.children}
          </g>
        </svg>
      </div>
    );
  }
}

Area.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};
