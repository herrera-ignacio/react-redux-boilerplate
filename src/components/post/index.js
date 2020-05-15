import React from 'react'

export function Post({ id, title, author, body, important }) {
  return (
    <div>
      <h2>{title}</h2>
      <p><b>Id:</b> {id}</p>
      <p><b>Author:</b> {author}</p>
      <p><b>Body:</b> {body}</p>
      <p><b>Important:</b> {`${important}`}</p>
    </div>
  )
}
