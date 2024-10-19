import { Routes, Route } from 'react-router-dom'
import User from './Pages/User'


function App() {

  return (
    <Routes>
      <Route path='/'element={<div>hii</div>} />
      <Route path='/user'element={<User/>} />
    </Routes>
  )
}

export default App
