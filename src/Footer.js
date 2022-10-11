import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  return (
    <div className="footer">
      <p className="footer-text" onClick={() => navigate("/")}>
        <span className="footer-name">pb benassi developer</span>
        <span>{new Date().getFullYear()}</span>
      </p>
    </div>
  );
}

export default Footer;
