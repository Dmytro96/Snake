
export const generateRandomSnake = () => {
  const UP = 'UP',
        DOWN = 'DOWN',
        LEFT = 'LEFT',
        RIGHT = 'RIGHT'
  let pointsOfSnake = []

  const max = 10,
        min = 3

  const snakeLength = Math.floor(Math.random() * (max - min) + min)
  console.log(snakeLength + ' - length')

  const firstPositionX = Math.ceil(Math.random() * 20) * 25 - 25

  console.log(firstPositionX + ' - X 1st')

  const firstPositionY = Math.ceil(Math.random() * 20) * 25 - 25
  console.log(firstPositionY + ' - Y 1st')

  const pushInArrayOfObjects = (xPos, yPos) => {
    pointsOfSnake.push({
      x: xPos,
      y: yPos
    })
  }
  const randomBool = () => {
    return Math.random() < 0.5 ? true : false
  }

  pushInArrayOfObjects(firstPositionX, firstPositionY)

  let directionStraight = false
  let i = 0
  const step = 25,
        breakPos = 475,
        startPos = 0
  let vectorX = true
  let xPos = firstPositionX
  let yPos = firstPositionY
  let direction

  while (i < snakeLength - 1) {

    if (i === 0) {
      const quarterBool = Math.random()
      switch (true) {
        case (quarterBool < 0.25):
          yPos += step
          direction = UP
          break
        case ((quarterBool >= 0.25) && (quarterBool < 0.5)):
          xPos += step
          direction = RIGHT
          break
        case ((quarterBool >= 0.5) && (quarterBool < 0.75)):
          yPos -= step
          direction = DOWN
          break
        default:
          xPos -= step
          direction = LEFT
      }
    } else {
      let tripleBool = Math.random()

      switch (direction) {
        case UP:
          if (tripleBool < 0.33) {
            xPos -= step
            direction = LEFT
          } else if (tripleBool >= 0.33 && tripleBool < 0.66) {
            yPos += step
            direction = UP
          } else {
            xPos += step
            direction = RIGHT
          }
          break
        case RIGHT:
          if (tripleBool < 0.33) {
            yPos += step
            direction = UP
          } else if (tripleBool >= 0.33 && tripleBool < 0.66) {
            xPos += step
            direction = RIGHT
          } else {
            yPos -= step
            direction = DOWN
          }
          break
        case DOWN:
          if (tripleBool < 0.33) {
            xPos += step
            direction = RIGHT
          } else if (tripleBool >= 0.33 && tripleBool < 0.66) {
            yPos -= step
            direction = DOWN
          } else {
            xPos -= step
            direction = LEFT
          }
          break
        case LEFT:
          if (tripleBool < 0.33) {
            yPos -= step
            direction = DOWN
          } else if (tripleBool >= 0.33 && tripleBool < 0.66) {
            xPos -= step
            direction = LEFT
          } else {
            yPos += step
            direction = UP
          }
          break
        default: break
      }
    }
    pushInArrayOfObjects(xPos, yPos)

    // if (directionStraight === true && vectorX === true) {
    //   if (randomBool()) {
    //     xPos += step
    //   } else {
    //     xPos -= step
    //   }
    // } else if (directionStraight === true && vectorX === false) {
    //   if (randomBool()) {
    //     yPos += step
    //   } else {
    //     yPos -= step
    //   }
    // } else if (directionStraight === false && vectorX === true) {
    //   if (randomBool()) {
    //     yPos += step
    //   } else {
    //     yPos -= step
    //   }
    // } else {
    //   if (randomBool()) {
    //     xPos += step
    //   } else {
    //     xPos -= step
    //   }
    // }
    //
    // if (vectorX === 3) {
    //   vectorX = !vectorX
    // }


    // directionStraight = !directionStraight
    i++

  }
  console.log(pointsOfSnake)



  return pointsOfSnake
}
