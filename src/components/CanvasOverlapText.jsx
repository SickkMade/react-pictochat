import {useContext} from 'react'
import { DrawingContext } from './InputSection'

export default function CanvasOverlapText() {
    const {canvasTextRef} = useContext(DrawingContext)
  return (
    <p className="App--CanvasOverlayText" ref={canvasTextRef}>test text</p>
  )
}
