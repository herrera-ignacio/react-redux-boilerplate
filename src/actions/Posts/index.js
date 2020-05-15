import types from '../types/posts'
import { apiURL } from '../../config/urls'

const requestPosts = () => ({
  type: types.GET_POSTS_REQUEST
})

const receivePosts = (posts) => ({
  type: types.GET_POSTS_SUCCESS,
  posts
});

export const getPosts = () => async (dispatch) => {
  dispatch(requestPosts())
  try {
    const response = await fetch(`${apiURL}/posts`);
    const data = await response.json();
    return dispatch(receivePosts(data));
  }
  catch (err) {
    return console.log(err);
  }
}

const requestCreatePost = () => ({
  type: types.CREATE_POST_REQUEST
})

const successCreatePost = (post) => ({
  type: types.CREATE_POST_SUCCESS,
  post
})

export const createPost = (post) => async (dispatch) => {
  dispatch(requestCreatePost())
  console.log(post)
  try {
    const res = await fetch(`${apiURL}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    });
    const postData = await res.json();
    return dispatch(successCreatePost(postData));
  }
  catch (err) {
    return console.log(err);
  }
}