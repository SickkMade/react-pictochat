import Toolbar from "./Toolbar.jsx"
import React, { useState, useRef, useContext } from 'react'
import { messageContext } from '../pages/mainPage.jsx'
import '../css/BottomHalf.css'
import Canvas from "./Canvas.jsx"

export const DrawingContext = React.createContext();


function InputSection({ socket }) {
    const [buttonWidth, setButtonWidth] = useState(2);
    const [color, setColor] = useState('black')
    const [messages] = useContext(messageContext)
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    function clear(){
        contextRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    function sendMessage(){
        let data = {
            type:'image',
            data:canvasRef.current.toDataURL(),
            username:localStorage.getItem('name'),
        }
        

        socket.emit('send-message', data)
        clear()
    }

    //CHANGE BECAUSE IF SOMEONE JOINS IT BREAKS
    function setImage(){
        let img = new Image;
        img.src = messages[0].data
        contextRef.current.drawImage(img,0,0)
      }
  
    return (
        <section id="input-section">
            <DrawingContext.Provider value={{buttonWidth, setButtonWidth, color, setColor, canvasRef, setImage, contextRef, clear}}>
                <Toolbar sendMessage={sendMessage} />
                <Canvas />
            </DrawingContext.Provider>
        </section>
      
    )
}

export default InputSection