import {useEffect, useRef, useState, useContext} from 'react';
import {DrawingContext} from './InputSection.jsx'

function DrawComponent() {
    const [isDrawing, setIsDrawing] = useState(false)

    const [buttonWidth, setButtonWidth, color, setColor, canvasRef, contextRef] = useContext(DrawingContext)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        contextRef.current = ctx

        //resizing
        canvas.height = 200;
        canvas.width = 400;

        ctx.lineWidth = buttonWidth;
        ctx.lineCap = 'rounded'

        ctx.fillStyle = "white";
        clear();
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
        contextRef.current.strokeStyle = color;

        contextRef.current.lineTo(offsetX,offsetY);
        contextRef.current.stroke();

    }
    function stopDrawing(){
        setIsDrawing(false)
        contextRef.current.closePath();
    }
    function clear(){
        contextRef.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
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