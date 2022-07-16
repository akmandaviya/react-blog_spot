import React, { useEffect, useState } from 'react'
import {getDocs,collection, doc, deleteDoc} from 'firebase/firestore'
import { auth, db } from '../firebase-data'


const Home = ({isAuth}) => {
  const[postList, setPostList] = useState([])
  const postReference = collection(db, "posts")

  useEffect(()=> {
    const getPost  = async () => {
      const data= await getDocs(postReference)
      // console.log(data) //complete data from firebase
      // console.log(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }  
    getPost() 
  })

  const deletePost = async (id) => {
   const postDoc = doc(db, "posts", id )
   await deleteDoc(postDoc)
  }

  return (
    <div className='homePage'>
      <h1>Blog.me !!</h1>
     {postList.map((post) => {
      return <div className='post'> 
          <div className='postHeader'>
            <div className='title'> <h3>{post.title}</h3></div>
          </div>
          <div className='deletePost'>
          { isAuth && post.author.id === auth.currentUser.uid  && 
            <button 
               onClick={() => {deletePost(post.id)
            }}
             >
              &#128465;
              </button>
          }
          </div>
          <div className='postTextContainer'>{post.post}</div>
          <h3>@{post.author.name}</h3>
      </div>
     })}
    </div>
  )
}

export default Home
