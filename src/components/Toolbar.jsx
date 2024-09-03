import '../css/toolbar.css'
import {useContext} from 'react'
import {DrawingContext} from './InputSection.jsx'

function Toolbar({ sendMessage }) {

    const {buttonWidth, setButtonWidth, color, setColor, setImage, clear} = useContext(DrawingContext)
    const isButtonSelected = (sizeCheck, checkee) =>  checkee === sizeCheck ? 'toolbar__button--selected' : ''
        
  return (
    <div id="toolbar">
    <button onClick={() => setButtonWidth(2)} className={`${isButtonSelected(2, buttonWidth)} toolbar__button`}>sizeSmall</button>
    <button onClick={() => setButtonWidth(5)} className={`${isButtonSelected(5, buttonWidth)} toolbar__button`}>sizeLarge</button>
    <button onClick={() => setColor("black")} className={`${isButtonSelected("black", color)} toolbar__button`}>pencil</button>
    <button onClick={() => setColor("white")} className={`${isButtonSelected("white", color)} toolbar__button`}>eraser</button>
    <button onClick={() => sendMessage()} className="toolbar__button">send</button>
    <button onClick={() => setImage()} className="toolbar__button">getLast</button>
    <button onClick={() => clear()} className="toolbar__button">clear</button>
    </div>
  )
}

export default Toolbar