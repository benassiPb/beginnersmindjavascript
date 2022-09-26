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
  const [postView, setPostView] = useState("single");
  const [currentPost, setCurrentPost] = useState(1);

  return (
    <div className="Writing-page-container">
      <div>
        <div className="writing-toggle-view">
          {/* <div className="pointer" onClick={() => setPostView("grid")}>
            {postView === "grid" ? (
              <span className="margin-30 bold">
                <AiFillAppstore fontSize="1em" color="darkblue" />
              </span>
            ) : (
              <span className="padding-30">
                <AiFillAppstore fontSize="1em" color="gray" />
              </span>
            )}
          </div> */}

          <div className="pointer" onClick={() => setPostView("single")}>
            {postView === "single" ? (
              <span className="margin-30 bold">
                <AiOutlineAlignLeft fontSize="1em" color="darkblue" />
              </span>
            ) : (
              <span className="padding-30">
                <AiOutlineAlignLeft fontSize="1em" color="gray" />
              </span>
            )}
          </div>

          <div className="pointer" onClick={() => setPostView("list")}>
            {postView === "list" ? (
              <span className="margin-30 bold">
                <AiOutlineBars fontSize="1em" color="darkblue" />
              </span>
            ) : (
              <span className="margin-30">
                <AiOutlineBars color="gray" fontSize="1em" />
              </span>
            )}
          </div>
        </div>

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
