import { Link } from 'react-router-dom'
import '../css/Main.css'

function SettingsSection() {
  return (
    <Link to="/login" className="settings__link">Change Name</Link>
  )
}

export default SettingsSection