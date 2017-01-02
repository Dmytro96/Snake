import React, { PropTypes, Component } from 'react';

export class GameOver extends Component {

  restart() {
    location.reload();
  }

  render() {
    const {width, height} = this.props;

    return (
      <g>
        <rect
          x={width}
          y={height}
          fill={'red'}
          style={{
            margin: 'auto',
            textAlign: 'center'
          }}
        />
        <text
          x={width * 0.3}
          y={height * 0.35}
          style={{
              fill: '#E0E0E0',
              stroke: '#b4b4b4',
              fontFamily: 'Verdana, serif',
              fontSize: '40px'
          }}
        >
          {this.props.snakeLength > 99 ? 'You are winner' : 'Game Over'}
        </text>
        <g onClick={this.restart.bind(this)}>
          <rect
            x={width * 0.49}
            y={height * 0.392}
            fill='#000'
            width={150}
            height={40}
          />
          <text
                x={width * 0.5}
                y={height * 0.45}
                style={{
                  fill: '#E0E0E0',
                  stroke: '#b4b4b4',
                  fontFamily: 'Verdana, serif',
                  fontSize: '30px',
                  cursor: 'pointer'
                }}
          >
            Try again
          </text>
        </g>
      </g>
    )
  }
}
