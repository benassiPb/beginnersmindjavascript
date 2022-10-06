import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  return (
    <div className="footer">
      <p className="footer-text" onClick={() => navigate("/")}>
        beginner's mind <span className="cursive">JavaScript </span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default Footer;
