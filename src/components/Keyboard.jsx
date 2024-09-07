import {useContext} from 'react'
import { DrawingContext } from './InputSection';


function Keyboard( { addLetter } ) {
    const {shift, caps} = useContext(DrawingContext)
    const keys = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'DEL'],
        ['CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ENTER'],
        ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
        [';', '`', 'SPACE', '[', ']'],
      ];

      const isCaps = (conditional) => conditional ? 'BottomHalf--Keyboard__Key__Darker' : ''

  return (
    <div className='BottomHalf--Keyboard'>
        {keys.map((keyarray, i) => {
            return(
            <div className="BottomHalf--Keyboard__Row" key={i}>
                {keyarray.map((key,i) => {
                    return <button 
                    className={`BottomHalf--Keyboard__Key 
                        ${key === 'SHIFT' || key === "CAPS" || key==='SPACE' || key ==='DEL' || key==='ENTER' ? 'BottomHalf--Keyboard__Key__Dark' : ''}
                        ${key === 'SPACE' ? 'BottomHalf--Keyboard__Key__Space': ''}
                        ${key === 'CAPS' ? isCaps(caps) : ''}
                        ${key === 'SHIFT' ? isCaps(shift) : ''}
                    `}
                    onClick={addLetter} 
                    key={i}>{key}
                    </button>
                })}
                
            </div>
            )
        })}
    </div>
  )
}

export default Keyboard