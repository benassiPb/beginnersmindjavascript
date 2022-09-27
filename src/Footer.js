import React from "react";

function Footer() {
  return (
    <div className="footer">
      <span>beginner's mind javascript </span>
      <span>{new Date().getFullYear()}</span>
    </div>
  );
}

export default Footer;
