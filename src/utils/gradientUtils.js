export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export const getGradientStyle = (gradient) => ({
  background: `linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2})`
})