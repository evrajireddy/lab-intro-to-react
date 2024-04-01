import React from "react";
//import "./index.css";


function Post(props) {
    const post = props.post
  return <div class="solid-border post">
   <div>{post.postTitle}</div>
   <div>{post.postDescription}</div>
  </div>
}

export default Post;