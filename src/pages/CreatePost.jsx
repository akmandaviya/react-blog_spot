import React, { useEffect, useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { auth, db } from '../firebase-data'
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {

const[title, setTitle] = useState("")
const[post, setPost] = useState("")

const postReference = collection(db, "posts")
let navigate = useNavigate();
const createPost = async () => {
 await addDoc (postReference,
   {title : title, post: post, 
    author : {name: auth.currentUser.displayName, id: auth.currentUser.uid}
  })
  navigate("/");
}

useEffect(()=> {
  if(!isAuth) {
    navigate("/login")
  }
},[])

  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Add a new Task</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Add a title...' type='text'
           onChange={(event) => {setTitle(event.target.value)}}/>
        </div>
        <div className='inputGp'>
          <label>Description:</label>
          <textarea placeholder='Add your post...' 
          onChange={(event) => {setPost(event.target.value)}}></textarea>
        </div>
        <button className='cp-button' onClick={createPost}>Add</button>
      </div>
    </div>
  )
}

export default CreatePost
