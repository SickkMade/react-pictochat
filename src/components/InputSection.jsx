import Toolbar from "./Toolbar.jsx"
import React, { useState, useRef, useContext } from 'react'
import { messageContext } from '../pages/mainPage.jsx'
import '../css/BottomHalf.css'
import Canvas from "./Canvas.jsx"
import Keyboard from "./Keyboard.jsx"
import '../css/InputSection.css'

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
        //rewrite in server later
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
            <div class='InputSection--canvas__wrapper'>
                <Toolbar sendMessage={sendMessage} />
                <Canvas />
            </div>
            </DrawingContext.Provider>
            <Keyboard />
        </section>
      
    )
}

export default InputSection