import React, { useState } from "react";
import SinglePost from "./SinglePost.js";
import PostsList from "./PostsList.js";

function Posts() {
  return (
    <div className="posts-page-container">
      <div>
        <SinglePost />
      </div>
      <PostsList />
    </div>
  );
}

export default Posts;
