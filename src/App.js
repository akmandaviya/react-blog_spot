import React, { useState } from "react";
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import {signOut} from 'firebase/auth'
import { auth } from "./firebase-data";


function App  () {
const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))


const signOutHere = () => {
 signOut(auth).then (() => {
  localStorage.clear()
  setIsAuth(false)
  window.location.pathname="login" //to redirect to login page after we sign out
 })
}

return (
  <Router>
    
    {/* navbar */}
    <nav>
      <Link to='/'>Home</Link>
      
     {!isAuth ? (<Link to='/login'>Login</Link>
     ) : (
      <>
      <Link to='/createpost'>New Blog</Link>
     <button className="signout" onClick={signOutHere}>Sign Out</button>
     </>
     )} 
    </nav>

    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} />} />
      <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
      <Route path="/login" element={<Login setIsAuth={setIsAuth}/>}/>
    </Routes>
  </Router>
)
}
export default App