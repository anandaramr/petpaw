import { Routes, Route } from 'react-router-dom'
import User from './Pages/User'
import Home from './Pages/Home'
import { AuthProvider } from '../Auth/Authcontext'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/profile'element={<User/>} />
        <Route path='*' element={<div className='font-poppins text-4xl font-medium flex h-svh justify-center items-center text-gray-700'>Page not found :{'('}</div>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
