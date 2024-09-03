import { useEffect, useContext } from 'react'
import io from 'socket.io-client'
import { messageContext } from '../pages/mainPage.jsx'
const socket = io.connect('https://react-pictochat-backend.onrender.com:8000')
import '../css/outputSection.css'


function OutputSection() {
    

    let [messages, setMessage] = useContext(messageContext) 

    useEffect(() => {
        socket.on('new-message', (data) => {
            setMessage([data, ...messages])
        })
    }, [messages])
  return (
    <section id="output-section">
        {messages.map((url, i) => (
            <img className="output-section__image" key={i} src={url} />
        ))}
    </section>
  )
}

export default OutputSection