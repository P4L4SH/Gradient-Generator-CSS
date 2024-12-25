import React from 'react'

function ColorInput({ label, value, onChange }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label className="text-white font-medium">{label}</label>
      <div className="flex items-center gap-4">
        <input 
          type="color" 
          value={value}
          onChange={onChange}
          className="w-14 h-10 rounded-md cursor-pointer bg-transparent"
        />
        <span className="text-white font-mono">{value}</span>
      </div>
    </div>
  )
}

export default ColorInput