import React from "react";
import postData from "./data/postData";

function SinglePost(props) {
  const { currentPost, setCurrentPost } = props;

  const handleNext = () => {
    currentPost !== postData.length
      ? setCurrentPost(currentPost + 1)
      : setCurrentPost(1);
  };

  const handlePrevious = () => {
    currentPost !== 1
      ? setCurrentPost(currentPost - 1)
      : setCurrentPost(postData.length);
  };

  return (
    <div className="single-post-page-container">
      <div className="single-post-container center">
        <div className="margin-top-50">
          {postData.map((post) =>
            post.postNumber !== currentPost ? null : (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <div className=" title-subject-container">
                  <p className="subject-tag align-center">{post.subject}</p>
                </div>

                {post["content"].map((paragraph) => (
                  <div>
                    <p className="align-left justify">{paragraph}</p>
                  </div>
                ))}
              </div>
            )
          )}
        </div>
        <div className="previous-next-container">
          <p className="previous-next-text" onClick={handlePrevious}>
            prev
          </p>
          <p className="previous-next-text" onClick={handleNext}>
            next
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
