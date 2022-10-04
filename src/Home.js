import React from "react";
import postData from "./data/postData";
import testimonialData from "./data/testimonialData";
import HomeProjectsScroll from "./ProjectsScroll";
import HomePostsGrid from "./HomePostsGrid";
import HomeQuote from "./HomeQuote";

function Home() {
  return (
    <div className="home-page">
      <HomeQuote />
      
      <h2 className="home-subheader">RECENT PROJECTS</h2>
      <HomeProjectsScroll />
      <h2 className="home-subheader">RECENT WRITING</h2>
      <HomePostsGrid />
      <h2 className="home-subheader testimonials-header">TESTIMONIALS</h2>
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
    </div>
  );
}

export default Home;
