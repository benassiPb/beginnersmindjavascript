import React, { useState } from "react";
import SinglePost from "./SinglePost.js";
import PostsList from "./PostsList.js";

function Posts() {
  const [currentPost, setCurrentPost] = useState(1);

  return (
    <div className="posts-page-container">
      <div>
        <SinglePost currentPost={currentPost} setCurrentPost={setCurrentPost} />
        <PostsList setCurrentPost={setCurrentPost} currentPost={currentPost} />
      </div>
    </div>
  );
}

export default Posts;
