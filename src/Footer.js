import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  return (
    <div className="footer">
      <p className="footer-text" onClick={() => navigate("/")}>
        pb benassi <span className="cursive">developer </span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default Footer;
