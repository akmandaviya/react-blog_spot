import React from 'react'
import {auth,provider} from '../firebase-data'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const Login = ({setIsAuth}) => {

let navigate = useNavigate() //to redirect to home page after login

  function signInWithGoogle() {
    signInWithPopup(auth, provider).then((result) => {
         localStorage.setItem("isAuth", true)
          setIsAuth(true)
          navigate('/')
    })
  }

  function signInWithEmail() {
    signInWithPopup(auth, provider).then((result) => {
         localStorage.setItem("isAuth", true)
          setIsAuth(true)
    })
  }


  return (
    <div className='loginPage'>
      
     <div className='login-heading'><h3>Sign-in to continue</h3></div>
     <div className='login-credentials'>
     <button className='login-with-guest-btn' onClick={signInWithEmail}>Guest Login</button>
     <button className='login-with-google-btn' onClick={signInWithGoogle}>Google</button>
     <button className='login-with-fb-btn' onClick={signInWithEmail}>Facebook</button>
     <button className='login-with-email-btn' onClick={signInWithEmail}>Email</button>
     <button className='login-with-phone-btn' onClick={signInWithEmail}>Phone</button>
     </div>
    </div>
  )
}

export default Login
