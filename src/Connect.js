import React from "react";
import linkedIn from "./images/linkedin.png";
import email from "./images/email.png";

function Connect() {
  return (
    <div>
      <h2>Let's connect!</h2>
      <div className="connect-container">
        <div className="connect-box">
          <a
            href="https://www.linkedin.com/in/pb-benassi/"
            target="_blank"
            rel="noreferrer"
            className="padding-30"
          >
            <img className="connect-image" src={linkedIn} alt="logo" />
          </a>
        </div>

        <div className="connect-box">
          <img className="connect-image" src={email} alt="envelope" />
        </div>
      </div>
    </div>
  );
}

export default Connect;
