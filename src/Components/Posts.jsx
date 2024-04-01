import React from "react";
import Post from "./Post"
//import "./index.css";


function Posts(props) {

    const posts = props.posts
    const renderPosts = posts.map((postObj) =>
        <Post post={postObj} />);


    return <div class="solid-border posts">
        <h3 class="align-center">Posts</h3>
        {renderPosts}
    </div>
}

export default Posts;