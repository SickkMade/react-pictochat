import { useEffect, useContext } from 'react'
import { messageContext } from '../pages/mainPage.jsx'
import '../css/outputSection.css'
import UsernameCanvasOverlay from './UsernameCanvasOverlay.jsx'


function OutputSection( { socket } ) {
    

    let [messages, setMessage] = useContext(messageContext) 

    useEffect(() => {
        socket.on('new-message', (data) => {
            setMessage([data, ...messages])
        })
    }, [messages])
  return (
    <section id="output-section">
        {/* I should send in an object declaring if it's a message or image... but well haha. i hope people dont abuse and send their own images */}
        {messages.map((data, i) => {
            if(data.type === 'image'){
                return (
                    <div className="UsernameCanvasOverlay__wrapper"key={i}>
                        <UsernameCanvasOverlay username={data.username}/>
                        <img className="output-section__image" src={data.data} />
                    </div>
                )
            }
            else {
                return <p className="output-section__p" key={i}>{data.data}</p>
            }
        })}
    </section>
  )
}

export default OutputSection