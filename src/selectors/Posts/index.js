import { createSelector } from 'reselect'
import { getPostsFromState } from './getters'

const postsAsArray = posts => posts.valueSeq().toArray()

export const getPosts = createSelector(
  [getPostsFromState],
  posts => postsAsArray(posts)
)
