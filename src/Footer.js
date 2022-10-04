import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>
        beginner's mind <span className="cursive">Javascript </span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default Footer;
