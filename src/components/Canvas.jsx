import DrawComponent from "./DrawComponent.jsx"
import UsernameCanvasOverlay from "./UsernameCanvasOverlay.jsx"
import '../css/UsernameCanvasOverlay.css'
import {useContext} from 'react'
import { DrawingContext } from "./InputSection.jsx"

function Canvas() {
  const {canvasText} = useContext(DrawingContext)
    
  return (
    <div className="UsernameCanvasOverlay__wrapper">
      <UsernameCanvasOverlay username={localStorage.getItem('name')} innerText={canvasText}/>
      <DrawComponent />
    </div>
  )
}

export default Canvas