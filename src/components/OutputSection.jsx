import { useEffect, useContext } from 'react'
import io from 'socket.io-client'
import { messageContext } from '../App'
const socket = io.connect('http://localhost:8000')


function OutputSection() {

    let [messages, setMessage] = useContext(messageContext) 

    useEffect(() => {
        socket.on('new-message', (data) => {
            setMessage([...messages, data])
        })
    }, [messages])
  return (
    <>
        {messages.map((url, i) => (
            <img key={i} src={url} />
        ))}
    </>
  )
}

export default OutputSection