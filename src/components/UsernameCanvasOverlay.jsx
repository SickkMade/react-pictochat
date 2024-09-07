
function UsernameCanvasOverlay({ username, innerText }) {
  return (
    <>
    <div className="UsernameCanvasOverlay UsernameCanvasOverlay--outer">
        <div className="usernameCanvasOverlay--username--outer UsernameCanvasOverlay--username">
            {username}
        </div>
    </div>
    <div className="UsernameCanvasOverlay">
        <div className="UsernameCanvasOverlay--username">
            {username}
        </div>
        <p className="App--CanvasOverlayText">{innerText}</p>
    </div>
    </>
  )
}

export default UsernameCanvasOverlay