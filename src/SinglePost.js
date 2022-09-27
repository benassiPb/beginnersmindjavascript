import React from "react";
import postData from "./data/postData";

function SinglePost(props) {
  const { currentPost, setCurrentPost } = props;

  const handleNext = () => {
    currentPost !== postData.length
      ? setCurrentPost(currentPost + 1)
      : setCurrentPost(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevious = () => {
    currentPost !== 1
      ? setCurrentPost(currentPost - 1)
      : setCurrentPost(postData.length);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="single-post-page-container">
      <div className="single-post-container center">
        <div className="margin-top-50">
          {postData.map((post) =>
            post.postNumber !== currentPost ? null : (
              <div key={post.id}>
                {" "}
                <h2>{post.title}</h2>
                <div className=" title-subject-container"></div>
                <img className="post-image" src={post.image} alt={post.title} />
                <p className="uppercase align-center">{post.subject}</p>
                {post["tagline"].map((paragraph, index) => (
                  <div key={index}>
                    <p className="post-tagline font-size-1-5rem font-weight-200 ">
                      {paragraph}
                    </p>
                  </div>
                ))}
                {post["sectionOneHeading"].map((paragraph, index) => (
                  <div key={index}>
                    <p className="align-left justify bold uppercase">
                      {paragraph}
                    </p>
                  </div>
                ))}
                {post["sectionOneContent"].map((paragraph, index) => (
                  <div key={index}>
                    <p className="align-left justify">{paragraph}</p>
                  </div>
                ))}
                {post.sectionTwoHeading
                  ? post["sectionTwoHeading"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify bold uppercase">
                          {paragraph}
                        </p>
                      </div>
                    ))
                  : null}
                {post.sectionTwoContent
                  ? post["sectionTwoContent"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify">{paragraph}</p>
                      </div>
                    ))
                  : null}
                {post.sectionThreeHeading
                  ? post["sectionThreeHeading"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify bold uppercase">
                          {paragraph}
                        </p>
                      </div>
                    ))
                  : null}
                {post.sectionThreeContent
                  ? post["sectionThreeContent"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify">{paragraph}</p>
                      </div>
                    ))
                  : null}
                {post.sectionFourHeading
                  ? post["sectionFourHeading"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify bold uppercase">
                          {paragraph}
                        </p>
                      </div>
                    ))
                  : null}
                {post.sectionFourContent
                  ? post["sectionFourContent"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify">{paragraph}</p>
                      </div>
                    ))
                  : null}
                {post.sectionFiveHeading
                  ? post["sectionFiveHeading"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify bold uppercase">
                          {paragraph}
                        </p>
                      </div>
                    ))
                  : null}
                {post.sectionFiveContent
                  ? post["sectionFiveContent"].map((paragraph, index) => (
                      <div key={index}>
                        <p className="align-left justify">{paragraph}</p>
                      </div>
                    ))
                  : null}
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
