import React, { PropTypes, Component } from 'react'
import './snake.scss'

export default class Snake extends Component {

  static pointsForPolyline = []

  randomSnake = () => {

    const max = 10,
          min = 3

    const snakeLength = Math.floor(Math.random() * (max - min) + min)
    console.log(snakeLength + ' - length')

    const firstPositionX = Math.floor(Math.random() * 20) * 25
    let xPos = firstPositionX + 25
    console.log(firstPositionX + ' - X 1st')


    const firstPositionY = Math.floor(Math.random() * 20) * 25 - 12.5
    let yPos = firstPositionY
    console.log(firstPositionY + ' - Y 1st')

    Snake.pointsForPolyline.push(firstPositionX)
    Snake.pointsForPolyline.push(firstPositionY)
    Snake.pointsForPolyline.push(xPos)
    Snake.pointsForPolyline.push(yPos)

    // for (let i = 0; i < 10; i++) {
    // }

    let directionStraight = true
    let i = 0
    while (i < snakeLength - 1) {
      // let directionStraight = Math.random() < 0.5 ? true : false
      directionStraight = !directionStraight

      let vectorX = true
      console.log(directionStraight + ' - direction straight')
      // true for straight line

      if (directionStraight === true && vectorX === true) {
        xPos += 37.5
      } else if (directionStraight === true && vectorX === false) {
        yPos += 37.5
      } else if (directionStraight === false && vectorX === true) {
        xPos -= 12.5
        Snake.pointsForPolyline.push(xPos, yPos)
        yPos += 25

      } else {
        yPos -= 12.5
        Snake.pointsForPolyline.push(xPos, yPos)
        xPos += 25
      }

      i++
      Snake.pointsForPolyline.push(xPos, yPos)
    }
    console.log(Snake.pointsForPolyline)
  }


  static defaultProps = {
    // points: [ 0,12.5,  25,12.5,  37.5,12.5,  37.5,25,  37.5,37.5,  75,37.5 ],
    points: Snake.pointsForPolyline,
    direction: 'RIGHT_DIRECTION'
  }

  state = {
    points: this.props.points
  }

  render() {
    this.randomSnake()

    const { points } = this.state
    let pointsStr = ''

    points.forEach((el, i) => {
      pointsStr += ( i % 2 === 0 ) ? el : `,${el} `
    })

    return (
      <polyline className='snake'
                points={pointsStr}
                >

      </polyline>
    )
  }
}

Snake.propTypes = {
  points: PropTypes.array.isRequired,
  direction: PropTypes.string.isRequired
}
