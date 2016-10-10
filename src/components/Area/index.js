import React, {PropTypes} from 'react';
import './index.scss'
import Snake from '../Snake/index.js'

export default class Area extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='area'>
        <svg width='600' height='600'>
          <rect width='500' height='500' >
            {this.props.children}
          </rect>
        </svg>
      </div>
    );
  }
}

Area.propTypes = {
};
