import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import './App.css'
import './css/variables.css'
import React, {useState} from 'react';

export const messageContext = React.createContext();

function App() {

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

export default App