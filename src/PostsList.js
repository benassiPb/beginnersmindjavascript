import React from "react";
import samplePostsData from "./data/postData";
import { useNavigate } from "react-router-dom";

function PostsList(props) {
  let navigate = useNavigate();

  return (
    <div className="postslist-page-container">
      <h2 className="all-posts">All Posts</h2>
      <div className="postslist-container">
        {samplePostsData.map((post) => {
          return (
            <div
              key={post.id}
              className="postslist-single-post-container"
              onClick={() => navigate(`/posts/${post.id}`)}
            >
              <img
                className="post-image postslist-image"
                src={post.image}
                alt={post.title}
              />

              <h2
                className="postslist-title"
                onClick={() => navigate(`/posts/${post.id}`)}
              >
                {post.title}
              </h2>
              <span className="postslist-subject">{post.subject}</span>
              <p className="point-8-rem">
                {post.month} {post.year}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
