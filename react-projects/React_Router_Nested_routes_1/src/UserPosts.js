
import React from "react";
import {Link, Route, Switch, useRouteMatch, useParams} from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {

  const { url } = useRouteMatch();
  const {params} = useRouteMatch()

//   console.log(useRouteMatch())
//   console.log(useParams())
//   console.log(`${url}/posts/${posts}`)
  
  const postLinks = posts.map((post) => (
    <li key={post.id}><Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>{post.title}</Link></li>//I added /posts in the Link to=`${url}/posts/${post.id}`
  ));

  
  if(posts) {
    return (
      <div>
        
        <Link to={`${url}/posts`}> </Link>

        {console.log(`${url}/posts/:postId`)}
        
        <ul>{postLinks}</ul>
        <div>

          <Switch>

            <Route path={`${url}/posts/:postId`}> 

              <UserPost posts={posts}/>
            </Route>

          </Switch>
            </div>
            </div>
    );
  }
   return <p>No post selected...</p>
  
};

export default UserPosts;
