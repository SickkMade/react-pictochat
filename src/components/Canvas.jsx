import DrawComponent from "./DrawComponent.jsx"
import UsernameCanvasOverlay from "./UsernameCanvasOverlay.jsx"
import '../css/UsernameCanvasOverlay.css'

function Canvas() {
    
  return (
    <div className="BottomHalf--Canvas__wrapper">
    <UsernameCanvasOverlay username={localStorage.getItem('name')}/>
    <DrawComponent />
    </div>
  )
}

export default Canvas