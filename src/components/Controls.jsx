import React from 'react'
import ColorInput from './ColorInput'
import AngleInput from './AngleInput'

function Controls({ gradient, setGradient, onGenerate, onCopy }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
      <div className="space-y-6 mb-6">
        <ColorInput 
          label="Color 1"
          value={gradient.color1}
          onChange={(e) => setGradient({...gradient, color1: e.target.value})}
        />
        <ColorInput 
          label="Color 2"
          value={gradient.color2}
          onChange={(e) => setGradient({...gradient, color2: e.target.value})}
        />
        <AngleInput 
          value={gradient.angle}
          onChange={(e) => setGradient({...gradient, angle: e.target.value})}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          className="w-full px-6 py-3 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-md"
          onClick={onGenerate}
        >
          Generate Random
        </button>
        <button 
          className="w-full px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-all duration-200 shadow-md"
          onClick={onCopy}
        >
          Copy CSS
        </button>
      </div>
    </div>
  )
}

export default Controls