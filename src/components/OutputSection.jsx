import { useEffect, useContext } from 'react'
import { messageContext } from '../pages/mainPage.jsx'
import '../css/outputSection.css'


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
        {messages.map((url, i) => {
            if(url.slice(0, 10) === 'data:image'){
                return <img className="output-section__image" key={i} src={url} />
            }
            else {
                return <p key={i}>{url}</p>
            }
        })}
    </section>
  )
}

export default OutputSection