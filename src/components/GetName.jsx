import Card from "./Card"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function GetName() {
  const [name, setName] = useState('')
  const navigation = useNavigate()
  function nameSubmit(e){
    e.preventDefault();
    localStorage.setItem('name', name)
    navigation('/')
  }
  return (
    <Card>
        <label htmlFor="enterName">Enter Name</label>
        <input id="enterName" type="text" onChange={e => setName(e.target.value)} maxLength={16} />
        <button onClick={nameSubmit}>Submit</button>
    </Card>
  )
}

export default GetName