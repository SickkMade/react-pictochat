
function Keyboard( { addLetter } ) {
    const keys = [
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'DEL'],
        ['CAPS', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ENTER'],
        ['SHIFT', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
        [';', '`', 'SPACE', '[', ']'],
      ];

  return (
    <div>
        {keys.map((keyarray, i) => {
            return(
            <div key={i}>
                {keyarray.map((key,i) => {
                    return <button onClick={addLetter} key={i}>{key}</button>
                })}
                
            </div>
            )
        })}
    </div>
  )
}

export default Keyboard