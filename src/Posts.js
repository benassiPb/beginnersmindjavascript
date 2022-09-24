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
  const [postView, setPostView] = useState("grid");
  const [currentPost, setCurrentPost] = useState(1);

  return (
    <div className="Writing-page-container">
      <div>
        <div className="writing-toggle-view">
          <div className="pointer" onClick={() => setPostView("grid")}>
            {postView === "grid" ? (
              <span className="padding-30 bold">
                <AiFillAppstore fontSize="1.1em" />
              </span>
            ) : (
              <span className={["padding-30"]}>
                <AiFillAppstore color="gray" />
              </span>
            )}
          </div>

          <div className="pointer" onClick={() => setPostView("list")}>
            {postView === "list" ? (
              <span className="padding-30 bold">
                <AiOutlineBars fontSize="1.1em" />
              </span>
            ) : (
              <span className={["padding-30"]}>
                <AiOutlineBars color="gray" />
              </span>
            )}
          </div>

          <div className="pointer" onClick={() => setPostView("single")}>
            {postView === "single" ? (
              <span className="padding-30 bold">
                <AiOutlineAlignLeft fontSize="1.1em" />
              </span>
            ) : (
              <span className="padding-30">
                <AiOutlineAlignLeft color="gray" />
              </span>
            )}
          </div>
        </div>

      
        {postView === "list" ? <PostsList /> : null}
        {postView === "single" ? (
          <SinglePost
            currentPost={currentPost}
            setCurrentPost={setCurrentPost}
          />
        ) : null}
        {postView === "grid" ? <PostsGrid /> : null}
      </div>
    </div>
  );
}

export default Posts;
