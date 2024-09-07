
function UsernameCanvasOverlay({ username, innerText }) {
    // stupid workaround
  return (
    <>
    <div className="UsernameCanvasOverlay UsernameCanvasOverlay--outer">
        <div className="usernameCanvasOverlay--username--outer">
            {username}
        </div>
    </div>
    <div className="UsernameCanvasOverlay">
        <p className="UsernameCanvasOverlay--username">
            {username}
        </p>
        <p className="App--CanvasOverlayText">{innerText}</p>
    </div>
    </>
  )
}

export default UsernameCanvasOverlay