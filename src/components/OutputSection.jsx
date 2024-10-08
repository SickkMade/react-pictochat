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
                    <div className="OutputSection--item UsernameCanvasOverlay__wrapper output-section__image__wrapper"key={i}>
                        <UsernameCanvasOverlay username={data.username} innerText={data.imagetext}/>
                        <img className="output-section__image" src={data.data} />
                        <div className="App--Canvas__bg"></div>
                    </div>
                )
            }
            else {
                return (
                    <div className="OutputSection--item output-section__p" key={i}>
                        <p className="output-section__p__yellow">Now Entering: </p>
                        {data.data}
                    </div>
                )
            }
        })}
    </section>
  )
}

export default OutputSection