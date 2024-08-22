import {useEffect, useRef, useState, useContext} from 'react';
import {DrawingContext} from '../App.jsx'

function DrawComponent() {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    const [buttonWidth] = useContext(DrawingContext)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        contextRef.current = ctx

        //resizing
        canvas.height = 200;
        canvas.width = 400;

        contextRef.current.lineWidth = buttonWidth;
        contextRef.current.lineCap = 'rounded'

    }, [])

    function startDrawing({nativeEvent}){
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY)

        setIsDrawing(true)
    }
    function draw({nativeEvent}){
        if(!isDrawing || nativeEvent.buttons!==1) return;
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineWidth = buttonWidth;
        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();

    }
    function stopDrawing(){
        setIsDrawing(false)
        contextRef.current.closePath();;

    }
        
    
  return (
    <canvas 
    ref={canvasRef} 
    id="canvas" 
    onMouseDown={startDrawing}
    onMouseOut={stopDrawing}
    onMouseMove={draw}
    onMouseUp={stopDrawing}
    onMouseEnter={startDrawing}
    className="BottomHalf--canvas">
    </canvas>
  )
}

export default DrawComponent