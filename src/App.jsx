import DrawComponent from "./components/DrawComponent.jsx"
import Toolbar from "./components/Toolbar.jsx"
import React, { useState } from 'react'
import './App.css'
import './css/BottomHalf.css'

export const DrawingContext = React.createContext();

function App() {

  const [buttonWidth, setButtonWidth] = useState(2);
  const [color, setColor] = useState('black')

  return (
    <DrawingContext.Provider value={[buttonWidth, setButtonWidth, color, setColor]}>
     <Toolbar />
     <DrawComponent />
    </DrawingContext.Provider>
  )
}

export default App