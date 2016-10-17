
export const generateRandomSnake = () => {

  let pointsForPolyline = []

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

  pointsForPolyline.push(firstPositionX, firstPositionY, xPos, yPos)

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
      xPos += 25
    } else if (directionStraight === true && vectorX === false) {
      yPos += 25
    } else if (directionStraight === false && vectorX === true) {
      xPos -= 12.5
      pointsForPolyline.push(xPos, yPos)
      yPos += 37.5

    } else {
      yPos -= 12.5
      pointsForPolyline.push(xPos, yPos)
      xPos += 37.5
    }

    i++
    pointsForPolyline.push(xPos, yPos)
  }
  console.log(pointsForPolyline)



  return pointsForPolyline
}
