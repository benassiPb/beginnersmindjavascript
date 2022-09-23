import React from "react";
import samplePostsData from "./postData";

function PostsGrid() {
  return (
    <div>
      <div>
        {samplePostsData.map((post) => {
          return (
            <div className="grid-post-box">
              <h4>{post.postNumber}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsGrid;
