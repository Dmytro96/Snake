import React, {PropTypes} from 'react';

export default class Snake extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <rect className='snake' width='25' height='25' fill='rgb(201, 47, 188)'></rect>
    )
  }
}
Snake.propTypes = {
};
