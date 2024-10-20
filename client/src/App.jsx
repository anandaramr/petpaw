import { Routes, Route } from 'react-router-dom'
import User from './Pages/User'
import SignUp from './Pages/Signup'
import { MdEmail } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordFill } from "react-icons/ri";
import Login from './Pages/Login';




function App() {

  return (
    <Routes>
      <Route path='/'element={<div>hii</div>} />
      <Route path='/signup' element={<SignUp CiUser={CiUser} 
        RiLockPasswordFill={RiLockPasswordFill} 
        MdEmail={MdEmail}/>}/>
        <Route path='/login' element={<Login CiUser={CiUser} 
        RiLockPasswordFill={RiLockPasswordFill} />}/>
      <Route path='/user'element={<User/>} />
    </Routes>
  )
}

export default App
