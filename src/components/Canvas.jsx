import DrawComponent from "./DrawComponent.jsx"
import UsernameCanvasOverlay from "./UsernameCanvasOverlay.jsx"
import '../css/UsernameCanvasOverlay.css'
import CanvasOverlapText from "./CanvasOverlapText.jsx"

function Canvas() {
    
  return (
    <div className="UsernameCanvasOverlay__wrapper">
      <CanvasOverlapText />
      <UsernameCanvasOverlay username={localStorage.getItem('name')}/>
      <DrawComponent />
    </div>
  )
}

export default Canvas