import {useEffect, useState, useContext} from 'react';
import {DrawingContext} from './InputSection.jsx'

function DrawComponent() {
    const [isDrawing, setIsDrawing] = useState(false)

    const {buttonWidth, color, canvasRef, contextRef} = useContext(DrawingContext)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        contextRef.current = ctx

        //resizing
        canvas.height = 160;
        canvas.width = 400;

        ctx.lineWidth = buttonWidth;
        ctx.lineCap = 'rounded'

        ctx.fillStyle = "white";
        clear();
    }, [])

    function startDrawing({nativeEvent}){
        setIsDrawing(true)
        
        const {offsetX, offsetY} = nativeEvent;
        startPath()
        contextRef.current.moveTo(offsetX, offsetY)
    }
    function startPath(){
        contextRef.current.beginPath();
    }
    function draw({nativeEvent}){
        if(!isDrawing && nativeEvent.buttons!==1) return;
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
        
    // TODO ** fix canvas not drawing on refresh. after begin path called works. so somehow path being disrupted. goodluck future jack
    
  return (
    <canvas 
    ref={canvasRef} 
    id="canvas" 
    onMouseDown={startDrawing}
    onMouseOut={stopDrawing}
    onMouseMove={draw}
    onMouseUp={stopDrawing}
    onMouseEnter={startPath}
    className="BottomHalf--canvas">
    </canvas>
  )
}

export default DrawComponent