import React, {useState} from "react";
import {Link, NavLink, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import UserPosts from "./UserPosts";
import UserProfile from "./UserProfile";

export const User = ({ users = [] }) => {
  
  const [showPosts, setShowPosts] = useState(false)//to show profile and post
  
  const {url} = useRouteMatch()
  const { userId } = useParams()

  if (!userId) {
    throw new Error("No URL parameter for userId")
  }

  const user = users.find(user => `${user.id}` === userId)

  /*
  const showPostsHandler = () => setShowPosts(true)//click handler to show post
  const showProfileHandler = () => setShowPosts(false)//click handler to show profile
  */
  
  if (user) {
    return (
      <section>
        <Link to="/"> &lt;- Users</Link>
        <div>
          <h2>{user.name}</h2>
          <ul>
            <li>
              <NavLink to={`${url}`} data-testid="user-profile">Profile</NavLink>              
            </li>
            <li>
              <NavLink to={`${url}/posts`} data-testid="user-posts">Posts</NavLink>
            </li>
          </ul>                   
          
          <div >            
          <Switch>          
            
            <Route path={`${url}/posts`}>
              {console.log(`${url}`)}
              <UserPosts posts={user.posts}/>
            </Route>
            
            <Route>
              <UserProfile user={user}/>
            </Route>
            
          </Switch>            
          </div>
        
        </div>
      </section>

    );
  }
  return <p>User not found</p>
}

export default User;
