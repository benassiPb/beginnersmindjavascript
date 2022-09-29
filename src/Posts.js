import React, { useState } from "react";
import SinglePost from "./SinglePost.js";
import PostsList from "./PostsList.js";
import PostsGrid from "./PostsGrid.js";
import {
  AiFillAppstore,
  AiOutlineBars,
  AiOutlineAlignLeft,
} from "react-icons/ai";

function Posts() {
  const [postView, setPostView] = useState("list");
  const [currentPost, setCurrentPost] = useState(1);

  return (
    <div className="posts-page-container">
      <div>
        {postView === "list" ? (
          <PostsList
            setCurrentPost={setCurrentPost}
            setPostView={setPostView}
          />
        ) : null}
        {postView === "single" ? (
          <SinglePost
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
          />
        ) : null}
        {postView === "grid" ? (
          <PostsGrid
            setCurrentPost={setCurrentPost}
            setPostView={setPostView}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Posts;
