import '../css/toolbar.css'
import {useContext} from 'react'
import {DrawingContext} from '../App.jsx'

function Toolbar() {

    const [buttonWidth, setButtonWidth] = useContext(DrawingContext)

    const isButtonSelected = sizeCheck =>  buttonWidth === sizeCheck ? 'toolbar__button--selected' : ''

  return (
    <>
    <button onClick={() => setButtonWidth(1)} className={isButtonSelected(1)}>sizeSmall</button>
    <button onClick={() => setButtonWidth(5)} className={isButtonSelected(5)}>sizeLarge</button>
    </>
  )
}

export default Toolbar