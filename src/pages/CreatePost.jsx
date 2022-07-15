import React from 'react'

const CreatePost = () => {
  return (
    <div className='createPostPage'>
      <div className='cpContainer'>
        <h1>Create a Blog</h1>
        <div className='inputGp'>
          <label>Title:</label>
          <input placeholder='Add a title...' type='text'/>
        </div>
        <div className='inputGp'>
          <label>Description:</label>
          <textarea placeholder='Add your post...'></textarea>
        </div>
        <button className='cp-button'>Add Post</button>
      </div>
    </div>
  )
}

export default CreatePost
