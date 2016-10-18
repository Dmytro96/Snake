
export const generateRandomSnake = () => {

  let pointsOfSnake = []

  const max = 10,
        min = 3

  const snakeLength = Math.floor(Math.random() * (max - min) + min)
  console.log(snakeLength + ' - length')

  const firstPositionX = Math.ceil(Math.random() * 20) * 25 - 25

  console.log(firstPositionX + ' - X 1st')

  const firstPositionY = Math.ceil(Math.random() * 20) * 25 - 25
  console.log(firstPositionY + ' - Y 1st')


  pointsOfSnake.push({
    x: firstPositionX,
    y: firstPositionY
  })

  let directionStraight = false
  let i = 0


  while (i < snakeLength - 1) {
    // let directionStraight = Math.random() < 0.5 ? true : false





    i++
  }
  console.log(pointsOfSnake)



  return pointsOfSnake
}
