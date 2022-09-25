import React from "react";

function Footer() {
  return (
    <div className="footer">
      <span>beginners mind javascript </span>
      <span>{new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
