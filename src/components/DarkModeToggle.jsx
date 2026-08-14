import React from 'react'

const DarkModeToggle = ({darkMode, onToggle}) =>{
  

  return (
    <div>
      <button onClick={onToggle}>Toggle {darkMode ? 'light' : 'Dark'} Mode</button>
        
        </div>
  )
}

export default DarkModeToggle;
