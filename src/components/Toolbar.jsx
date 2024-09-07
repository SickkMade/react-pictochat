import '../css/toolbar.css'
import {useContext} from 'react'
import {DrawingContext} from './InputSection.jsx'

function Toolbar() {

    const {buttonWidth, setButtonWidth, color, setColor} = useContext(DrawingContext)
    const isButtonSelected = (sizeCheck, checkee) =>  checkee === sizeCheck ? 'toolbar__button--selected' : ''
        
  return (
    <div id="toolbar">
    <button onClick={() => setButtonWidth(2)} className={`${isButtonSelected(2, buttonWidth)} toolbar__button`}>sizeSmall</button>
    <button onClick={() => setButtonWidth(5)} className={`${isButtonSelected(5, buttonWidth)} toolbar__button`}>sizeLarge</button>
    <button onClick={() => setColor("black")} className={`${isButtonSelected("black", color)} toolbar__button`}>pencil</button>
    <button onClick={() => setColor("white")} className={`${isButtonSelected("white", color)} toolbar__button`}>eraser</button>
    </div>
  )
}

export default Toolbar