import {useContext} from 'react';
import { DrawingContext } from './InputSection';

function KeyboardToolBoxSidebar() {
    const {sendMessage, setImage, clear} = useContext(DrawingContext);
  return (
    <div className="BottomHalf--Toolbox">
        <button onClick={() => sendMessage()} className="toolbar__button">send</button>
        <button onClick={() => setImage()} className="toolbar__button">getLast</button>
        <button onClick={() => clear()} className="toolbar__button">clear</button>
    </div>
    
  )
}

export default KeyboardToolBoxSidebar