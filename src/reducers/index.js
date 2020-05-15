import { combineReducers } from 'redux'
import * as postsReducers from './Posts'

export default combineReducers({
  ...postsReducers
})
