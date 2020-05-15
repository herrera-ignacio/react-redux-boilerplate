import React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/Posts'
import { getPosts as getPostsSelector } from '../../selectors/Posts'
import { Post } from '../../components/post'

function Posts({ posts, getPosts }) {
  return (
    <div>
      <h1>Read Posts</h1>
      <button onClick={getPosts}>Get posts!</button>
      { posts.map((p) => <Post key={p.id} {...p} />) }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: getPostsSelector(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)