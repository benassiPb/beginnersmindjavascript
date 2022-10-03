import React, { useState } from "react";
import SinglePost from "./SinglePost.js";
import PostsList from "./PostsList.js";
import { useParams } from "react-router-dom";

function Posts() {
  return (
    <div className="posts-page-container">
      <div>
        <SinglePost />
        <PostsList />
      </div>
    </div>
  );
}

export default Posts;
