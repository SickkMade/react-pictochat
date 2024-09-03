import { Outlet, Navigate } from "react-router-dom"
function ProtectedRoutes() {
    const hasName = localStorage.getItem('name')
    return hasName ?  <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes