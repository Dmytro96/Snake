// TODO: проверка на доступность следующей клетки
export const generateRandomSnake = () => {
  const UP = 'UP',
      LEFT = 'LEFT',
      DOWN = 'DOWN',
     RIGHT = 'RIGHT'

  const max = 10,
        min = 3
  let random = Math.random()
  let pointsOfSnake = []

  const snakeLength = Math.floor(Math.random() * (max - min) + min)
  console.log(snakeLength + ' - length')

  const generateFirstPoint = () => Math.floor(Math.random() * 20) * 25
  const firstPositionX = generateFirstPoint()
  const firstPositionY = generateFirstPoint()

  const pushInArrayOfObjects = (xPos, yPos) => {
    pointsOfSnake.push({
      x: xPos,
      y: yPos
    })
  }
  const randomBool = () => Math.random() < 0.5 ? true : false

  const stepUP = () => {
    yPos -= step
    direction = UP
  }
  const stepRIGHT = () => {
    xPos += step
    direction = RIGHT
  }
  const stepDOWN = () => {
    yPos += step
    direction = DOWN
  }
  const stepLEFT = () => {
    xPos -= step
    direction = LEFT
  }

  const changeForUP = () => {
    if (random < 0.33) {
      stepLEFT()
    } else if (random > 0.66) {
      stepUP()
    } else {
      stepRIGHT()
    }
  }
  const changeForRIGHT = () => {
    if (random < 0.33) {
      stepUP()
    } else if (random > 0.66) {
      stepRIGHT()
    } else {
      stepDOWN()
    }
  }
  const changeForDOWN = () => {
    if (random < 0.33) {
      stepRIGHT()
    } else if (random > 0.66) {
      stepDOWN()
    } else {
      stepLEFT()
    }
  }
  const changeForLEFT = () => {
    if (random < 0.33) {
      stepDOWN()
    } else if (random > 0.66) {
      stepLEFT()
    } else {
      stepUP()
    }
  }

  const checkOverflowUP = () => {
    if (yPos === 0) {
      stepRIGHT()
    } else {
      changeForUP()
    }
  }
  const checkOverflowRIGHT = () => {
    if (xPos === 475) {
      stepDOWN()
    } else {
      changeForRIGHT()
    }
  }
  const checkOverflowDOWN = () => {
    if (yPos === 475) {
      stepLEFT()
    } else {
      changeForDOWN()
    }
  }
  const checkOverflowLEFT = () => {
    if (xPos === 0) {
      stepUP()
    } else {
      changeForLEFT()
    }
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
    random = Math.random()
    if (i === 0) {
      switch (true) {
        case (random < 0.25):
          checkOverflowUP()
          break
        case (random >= 0.25 && random < 0.5):
          checkOverflowRIGHT()
          break
        case (random >= 0.5 && random < 0.75):
          checkOverflowDOWN()
          break
        default:
          checkOverflowLEFT()
      }
    } else {
      switch (direction) {
        case UP:
            checkOverflowLEFT()
          break
        case RIGHT:
            checkOverflowRIGHT()
          break
        case DOWN:
            checkOverflowDOWN()
          break
        case LEFT:
            checkOverflowLEFT()
          break
        default: break
      }
    }

    pushInArrayOfObjects(xPos, yPos)

    i++
  }

  // pointsOfSnake.reverse()
  console.log(pointsOfSnake)
  return pointsOfSnake
}
