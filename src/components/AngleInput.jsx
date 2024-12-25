import React from 'react'

function AngleInput({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-white font-medium">Angle</label>
        <span className="text-white font-mono">{value}°</span>
      </div>
      <input 
        type="range" 
        value={value}
        onChange={onChange}
        min="0"
        max="360"
        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
      />
    </div>
  )
}

export default AngleInput