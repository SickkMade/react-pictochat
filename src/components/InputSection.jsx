import DrawComponent from "./DrawComponent.jsx"
import Toolbar from "./Toolbar.jsx"
import React, { useState, useEffect, useRef } from 'react'
import '../css/BottomHalf.css'

import io from 'socket.io-client'

export const DrawingContext = React.createContext();
const socket = io.connect('http://localhost:8000')

function InputSection() {

    const [buttonWidth, setButtonWidth] = useState(2);
    const [color, setColor] = useState('black')
    const canvasRef = useRef(null)


    function sendMessage(){
        let data = canvasRef.current.toDataURL();

        socket.emit('send-message', data)
    }
  
    return (
      <DrawingContext.Provider value={[buttonWidth, setButtonWidth, color, setColor, canvasRef]}>
       <Toolbar sendMessage={sendMessage} />
       <DrawComponent canvasRef={canvasRef} />
      </DrawingContext.Provider>
    )
}

export default InputSection