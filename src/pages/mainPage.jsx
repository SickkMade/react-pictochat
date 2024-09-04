import InputSection from '../components/InputSection';
import OutputSection from '../components/OutputSection';
import SettingsSection from '../components/SettingsSection';
import React, {useState, useEffect} from 'react';
export const messageContext = React.createContext();

import io from 'socket.io-client'
const socket = io.connect(import.meta.env.VITE_URL)

function MainPage() {
    const [messages, setMessages] = useState([]) 

    useEffect(() => {
      socket.emit('user-joined', localStorage.getItem('name'));    
    
      //if we leave the page 
      return () => {
        socket.emit('user-left', localStorage.getItem('name'));
      };
    }, []);

  return (
    <section id="holder">
    <SettingsSection />
    <messageContext.Provider value={[messages, setMessages]}>
      <OutputSection socket={socket}/>
      <InputSection socket={socket}/>
    </messageContext.Provider>
    </section>
  )
}

export default MainPage