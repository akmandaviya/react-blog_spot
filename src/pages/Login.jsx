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

  return (
    <div className='loginPage'>
      
     <div className='login-heading'><h3>Sign-in to continue</h3></div>
     <div className='login-credentials'>
     <button className='login-with-google-btn' onClick={signInWithGoogle}>Google</button>
    
     </div>
    </div>
  )
}

export default Login
