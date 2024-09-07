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
    const [canvasText, setCanvasText] = useState('')
    const [shift, setShift] = useState(false)
    const [caps, setCaps] = useState(false)

    function clear(){
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setCanvasText("")
    }

    function sendMessage(){
        //rewrite in server later
        let data = {
            type:'image',
            imagetext:canvasText,
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
        setCanvasText(messages[0].imagetext)
        contextRef.current.drawImage(img,0,0)
      }

    function addLetter(e){
        let input = e.target.innerText
        switch (input){
            case 'DEL':
                setCanvasText(canvasText.substring(0, canvasText.length-1))
                break;
            case 'ENTER':
                setCanvasText(canvasText+'\n')
                break;
            case 'SPACE':
                setCanvasText(canvasText+' ')
                break;
            case 'CAPS':
                setCaps(!caps);
                break;
            case 'SHIFT':
                setShift(!shift);
                break
            default:
                caps ? input = input.toUpperCase() : input
                shift ? input = input.toUpperCase() : input
                setShift(false) //put this in a conditional
                setCanvasText(canvasText + input)
                break;
        }
    }

    return (
        <section id="input-section">
            <DrawingContext.Provider value={{buttonWidth, setButtonWidth, color, setColor, canvasRef, setImage, contextRef, clear, canvasText, setCanvasText, caps, shift}}>
            <div className='InputSection--canvas__wrapper'>
                <Toolbar sendMessage={sendMessage} />
                <Canvas />
            </div>
            <Keyboard addLetter={addLetter}/>
            </DrawingContext.Provider>
        </section>
      
    )
}

export default InputSection