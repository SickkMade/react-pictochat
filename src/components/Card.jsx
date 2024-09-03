import '../css/card.css'

function Card({children}) {
  return (
    <div className="card">
        {children}
    </div>
  )
}

export default Card