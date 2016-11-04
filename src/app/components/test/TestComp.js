import React, { PropTypes as pt, Component } from 'react'

export class TestComp extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  static defaultProps = {
    time: 10
  };

  render() {
    const { time } = this.props;
    return (
      <div
        className='myTestDiv'>
        Add {time} smth
      </div>
    )
  }
}
