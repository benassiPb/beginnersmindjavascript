import React from "react";
import postData from "./data/postData";

function SinglePost(props) {
  const { currentPost, setCurrentPost } = props;
  return (
    <div>
      <div>
        <h4>single post</h4>
        {postData.map((post) =>
          post.postNumber === currentPost ? post.title : null
        )}
      </div>
      <div className="previous-next-container">
        <p>prev</p>
        <p>next</p>
      </div>
    </div>
  );
}

export default SinglePost;
