import DrawComponent from "./DrawComponent.jsx"
import Toolbar from "./Toolbar.jsx"
import React, { useState, useRef } from 'react'
import '../css/BottomHalf.css'

import io from 'socket.io-client'

export const DrawingContext = React.createContext();
const socket = io.connect('http://localhost:8000')

function InputSection() {

    const [buttonWidth, setButtonWidth] = useState(2);
    const [color, setColor] = useState('black')
    const canvasRef = useRef(null)
    const contextRef = useRef(null)



    function sendMessage(){
        let data = canvasRef.current.toDataURL();

        socket.emit('send-message', data)
    }
  
    return (
        <section id="input-section">
            <DrawingContext.Provider value={[buttonWidth, setButtonWidth, color, setColor, canvasRef, contextRef]}>
            <Toolbar sendMessage={sendMessage} />
            <DrawComponent canvasRef={canvasRef} />
            </DrawingContext.Provider>
        </section>
      
    )
}

export default InputSection