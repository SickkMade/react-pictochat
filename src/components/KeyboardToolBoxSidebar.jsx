import {useContext} from 'react';
import { DrawingContext } from './InputSection';

function KeyboardToolBoxSidebar() {
    const {sendMessage, setImage, clear} = useContext(DrawingContext);
  return (
    <div className="BottomHalf--Toolbox">
        <button onClick={() => sendMessage()} className="toolbar__button"><img className="toolbar__img" src='assets-pictochat/upload.png' /></button>
        <button onClick={() => setImage()} className="toolbar__button"><img className="toolbar__img" src='assets-pictochat/copy_image.png' /></button>
        <button onClick={() => clear()} className="toolbar__button BottomHalf--Toolbox__Clear"><img className="toolbar__img " src='assets-pictochat/clean.png' /></button>
    </div>
    
  )
}

export default KeyboardToolBoxSidebar