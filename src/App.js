import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Posts from './screens/posts'
import PostCreate from './screens/post-create'
import { PostUpdate } from './screens/post-update'
import { PostDelete } from './screens/post-delete'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Read</Link>
            </li>
            <li>
              <Link to="/posts/create">Create</Link>
            </li>
            <li>
              <Link to="/posts/update">Update</Link>
            </li>
            <li>
              <Link to="/posts/delete">Delete</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/posts/create">
            <PostCreate />
          </Route>
          <Route path="/posts/update">
            <PostUpdate />
          </Route>
          <Route path="/posts/delete">
            <PostDelete />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
