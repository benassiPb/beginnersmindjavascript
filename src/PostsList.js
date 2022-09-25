import React from "react";
import samplePostsData from "./data/postData";

function PostsList(props) {
  const { setCurrentPost, setPostView } = props;

  const handleClick = (postId) => {
    setCurrentPost(postId);
    setPostView("single");
  };

  return (
    <div>
      <div className="postslist-container">
        {samplePostsData.map((post) => {
          return (
            <div key={post.id}>
              <h2
                className="postslist-title"
                onClick={() => handleClick(post.id)}
              >
                {post.title}
              </h2>
              <span className="subject-list">{post.subject}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsList;
