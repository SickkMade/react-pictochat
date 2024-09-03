import Card from "./Card"

function GetName() {
  return (
    <Card>
        <label htmlFor="enterName">Enter Name</label>
        <input id="enterName" type="text" />
        <button>Submit</button>
    </Card>
  )
}

export default GetName