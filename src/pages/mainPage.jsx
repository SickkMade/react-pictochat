import InputSection from '../components/InputSection';
import OutputSection from '../components/OutputSection';
import SettingsSection from '../components/SettingsSection';
import React, {useState} from 'react';
export const messageContext = React.createContext();

function MainPage() {
    const [messages, setMessages] = useState([]) 

  return (
    <section id="holder">
    <messageContext.Provider value={[messages, setMessages]}>
      <SettingsSection />
      <OutputSection/>
      <InputSection/>
    </messageContext.Provider>
    </section>
  )
}

export default MainPage