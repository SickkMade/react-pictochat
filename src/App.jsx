import './App.css'
import './css/variables.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './layouts/layout'
import MainPage from './pages/mainPage'
import ProtectedRoutes from './util/ProtectedRoutes'
import GetName from './components/GetName'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<ProtectedRoutes/>}>
          <Route path='/' element={<MainPage />}/>
        </Route>
        <Route path="/login"element={<GetName />} />
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App