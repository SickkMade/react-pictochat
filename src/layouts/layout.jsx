import { Outlet } from 'react-router-dom'
import Background from '../components/Background'

function layout() {
  return (
    <>
    <Background />
    <Outlet />
    </>
  )
}

export default layout