import React from "react";
import postData from "./data/postData";
import projectData from "./data/projectData";
import testimonialData from "./data/testimonialData";

function Home() {
  return (
    <div className="home-page">
      <div className="home-quote-container">
        <p className="home-quote-large-quotation">"</p>
        <div className="home-quote-body">
          <p className="home-quote-text">
            The <span className="bold">beginner's mind</span> is the mind of{" "}
            <span className="bold gold">compassion</span>. When our mind is
            compassionate, it is <span className="bold gold">boundless</span>."
          </p>
          <p className="home-quote-author">-Shunryu Suzuki</p>
        </div>
      </div>
      <h2 className="home-subheader-left">RECENT PROJECTS</h2>
      <div className="home-projects-container">
        {projectData.map((project) =>
          project.id >= projectData.length - 9 ? (
            <div key={project.id}>
              <img
                className="home-project-cover"
                src={project.cover}
                alt={project.title}
              />
            </div>
          ) : null
        )}
      </div>
      <h2 className="home-subheader-left">RECENT WRITING</h2>
      <div className="home-posts-container">
        {postData.map((post) =>
          post.id >= postData.length - 9 ? (
            <div key={post.id}>
              <img
                className="home-post-image"
                src={post.image}
                alt={post.title}
              />
              <div>
                <p className="home-post-title">{post.title}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
      <h2 className="home-subheader-center">TESTIMONIALS</h2>
      <div className="home-testimonials-container">
        {testimonialData.map((item) => (
          <div className="home-testimonial-container" key={item.id}>
            <div className="home-testimonial-quote">
              <div className="home-testimonial-quotation-quote-container">
                <p className="home-testimonial-large-quotation">"</p>
                <p>{item.quote}"</p>
              </div>
            </div>
            <div className="home-testimonial-author-bio-container">
              <p className="home-testimonial-author bold">{item.author}</p>
              <p className="home-testimonial-author">{item.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="home-subheader-center">CONNECT</h2>
    </div>
  );
}

export default Home;
