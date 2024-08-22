import './App.css'
import './css/variables.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './layouts/layout'
import MainPage from './pages/mainPage'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />}/>
      </Route>
    )
  )

  return <RouterProvider router={router}/>
}

export default App