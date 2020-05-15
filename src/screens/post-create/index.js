import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../actions/Posts'

function PostCreate({ createPost }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [body, setBody] = useState('')
  const [important, setImportant] = useState(false)

  const cleanInputs = () => {
    setTitle('')
    setAuthor('')
    setBody('')
    setImportant(false)
  }
  
  const handleSubmit = (event) => {
    createPost({ title, author, body, important })
    event.preventDefault()
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label>
          Author:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>

        <label>
          Title:
          <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
        </label>

        <label>
          Title:
          <input type="checkbox" checked={important} onChange={(e) => setImportant(e.target.checked)} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: (post) => dispatch(createPost(post))
  }
}

export default connect(null, mapDispatchToProps)(PostCreate)