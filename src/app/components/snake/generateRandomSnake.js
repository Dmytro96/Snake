
export const generateRandomSnake = () => {

  let pointsForPolyline = []

  const max = 10,
        min = 3

  const snakeLength = Math.floor(Math.random() * (max - min) + min)
  console.log(snakeLength + ' - length')

  // for (var i = 2; ; i--) {
  //
  // }

  // const firstPositionX = Math.floor(Math.random() * 20) * 25
  const firstPositionX = 50
  let xPos = firstPositionX + 25
  console.log(firstPositionX + ' - X 1st')

  // const firstPositionY = Math.floor(Math.random() * 20) * 25 - 12.5
  const firstPositionY = 62.5
  let yPos = 62.5
  console.log(firstPositionY + ' - Y 1st')

  pointsForPolyline.push(firstPositionX, firstPositionY, xPos, yPos)


  let directionStraight = false
  let i = 0

  while (i < snakeLength - 1) {
    // let directionStraight = Math.random() < 0.5 ? true : false
    directionStraight = !directionStraight

    let vectorX = true
    // if (i === 3) vectorX = !vectorX
    // console.log(directionStraight + ' - direction straight')
    // true for straight line


  //                  EXAMPLE
  // [ 50,62.5,  75,62.5,  100,62.5, 87.5,62.5,  87.5,100,  87.5,87.5,  125,87.5,  112.5,87.5,  112.5,125,  112.5,150,  112.5,137.5,  150,137.5,  137.5,137.5,  137.5,100,    137.5, 87.5,  175,87.5 ],
  //
  //
  // [50,62.5,  75,62.5,  100,62.5,  87.5,62.5,  87.5,100,  112.5,100,  100,100,  100,137.5]

    if (directionStraight === true && vectorX === true) {
      xPos += 25
    } else if (directionStraight === true && vectorX === false) {
      yPos += 25
    } else if (directionStraight === false && vectorX === true) {
      xPos -= 12.5
      pointsForPolyline.push(xPos, yPos);
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
