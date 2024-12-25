import { useState } from 'react'
import Controls from './components/Controls'
import { generateRandomColor, getGradientStyle } from './utils/gradientUtils'

function App() {
  const [gradient, setGradient] = useState({
    color1: '#ff0000',
    color2: '#00ff00',
    angle: 45
  })

  const generateRandomGradient = () => {
    setGradient({
      color1: generateRandomColor(),
      color2: generateRandomColor(),
      angle: Math.floor(Math.random() * 360)
    })
  }

  const copyToClipboard = () => {
    const cssCode = `background: linear-gradient(${gradient.angle}deg, ${gradient.color1}, ${gradient.color2});`
    navigator.clipboard.writeText(cssCode)
    alert('CSS code copied to clipboard!')
  }

  return (
    <div className="min-h-screen w-full transition-all duration-500" style={getGradientStyle(gradient)}>
      <div className="container mx-auto px-4 py-8 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8 drop-shadow-lg">
            Gradient Generator
          </h1>
          <Controls 
            gradient={gradient}
            setGradient={setGradient}
            onGenerate={generateRandomGradient}
            onCopy={copyToClipboard}
          />
        </div>
      </div>
    </div>
  )
}

export default App