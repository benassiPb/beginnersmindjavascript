import React from "react";
import postData from "./data/postData";
import { useNavigate } from "react-router-dom";

function HomePostsGrid() {
  let navigate = useNavigate();

  return (
    <div className="home-posts-container">
      {postData.map((post) =>
        post.id >= postData.length - 9 ? (
          <div
            key={post.id}
            className="home-post-container"
            onClick={() => navigate(`/posts/${post.id}`)}
          >
            <div className="home-post-grid-item">
              <img
                className="home-post-image"
                src={post.image}
                alt={post.title}
              />
              <div className="home-post-title">
                <p>{post.subject}</p>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}

export default HomePostsGrid;
