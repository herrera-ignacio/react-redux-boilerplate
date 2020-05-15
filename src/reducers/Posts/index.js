import { Map } from 'immutable' 
import types from '../../actions/types/posts'

const INITIAL_LOADER_STATE = { loading: false, error: false }
export const posts_loader = (state = INITIAL_LOADER_STATE, action) => {
  switch(action.type)
  {
    case types.CREATE_POST_REQUEST:
    case types.GET_POSTS_REQUEST:
    {
      return { loading: true, error: false }
    }
    case types.CREATE_POST_SUCCESS:
    case types.GET_POSTS_SUCCESS:
    {
      return { loading: false, error: true }
    }
    default: return state
  }
} 

const INITIAL_POSTS_STATE = Map();
export const posts = (state = INITIAL_POSTS_STATE, action) => {
  switch(action.type)
  {
    case types.GET_POSTS_SUCCESS:
    {
      const allPosts = Map(action.posts.map(post => [post.id, post]))
      return state.merge(allPosts)
    }
    case types.CREATE_POST_SUCCESS:
    {
      const newPost = Map([[action.post.id, action.post]])
      return state.merge(newPost)
    }
    default: return state
  }
}