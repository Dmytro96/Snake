import React, {PropTypes} from 'react';
import './area.scss'
import Snake from '../snake/snake.js'

export default class Area extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='area'>
        <svg width='600' height='600'>
        <g>
          <rect width='500' height='500'></rect>
          {this.props.children}
        </g>
        </svg>
      </div>
    );
  }
}

Area.propTypes = {
};
