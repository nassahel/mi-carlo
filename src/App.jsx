import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login'
import Logpass from './pages/logpass'
import Register from './pages/Register'
import Inicio from './pages/inicio'



function App() {

  return (
    <div  className='bg-gray-100 roboto'>
      <Routes>
        <Route path='/*' element={<Login />} />
        <Route path='/pass' element={<Logpass />} />
        <Route path='/register' element={<Register />} />
        <Route path='/inicio' element={<Inicio />} />
        
      </Routes>

    </div>
  )
}

export default App
