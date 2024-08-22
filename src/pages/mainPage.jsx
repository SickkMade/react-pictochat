import InputSection from '../components/InputSection';
import OutputSection from '../components/OutputSection';
import React, {useState} from 'react';
export const messageContext = React.createContext();

function mainPage() {
    const [messages, setMessages] = useState([]) 

  return (
    <section id="holder">
    <messageContext.Provider value={[messages, setMessages]}>
      <OutputSection/>
      <InputSection/>
    </messageContext.Provider>
    </section>
  )
}

export default mainPage