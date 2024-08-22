import DrawComponent from "./components/DrawComponent.jsx"
import Toolbar from "./components/Toolbar.jsx"
import React, { useState } from 'react'
import './App.css'
import './css/BottomHalf.css'

export const DrawingContext = React.createContext();

function App() {

  const [buttonWidth, setButtonWidth] = useState(1);

  return (
    <DrawingContext.Provider value={[buttonWidth, setButtonWidth]}>
     <Toolbar />
     <DrawComponent />
    </DrawingContext.Provider>
  )
}

export default App