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
    <h1>doodle </h1>
      <Link to='/'>Home</Link>
      <Link to='/'>Inspiration</Link>
      <Link to='/'>Find Work</Link>
      <Link to='/'>Learn Design</Link>
      <Link to='/'>Go Pro</Link>
      <Link to='/'>Design Files</Link>
      <Link to='/'>Hire Designers</Link>

     {!isAuth ? (<Link className="sign-in" to='/login'>Sign in</Link>
     
     ) : (
      <>
      <Link to='/createpost'>New Task</Link>
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