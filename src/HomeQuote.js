import React, { useState } from "react";

function HomeQuote() {
  const [currentQuote, setCurrentQuote] = useState(1);
  return (
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
  );
}

export default HomeQuote;
