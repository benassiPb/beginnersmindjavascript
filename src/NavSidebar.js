import React from "react";
import { Link } from "react-router-dom";

function NavSidebar(props) {
  const { handleClick } = props;
  return (
    <div className="nav-sidebar fade-in">
      <nav className="nav-links">
        <li className="nav-link">
          <Link to="/about" onClick={handleClick}>
            <span className="underline-effect">about</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/samplesites" onClick={handleClick}>
            <span className="underline-effect">web design</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/posts/1" onClick={handleClick}>
            <span className="underline-effect">writing</span>
          </Link>
        </li>

        <li className="nav-link">
          <Link to="/projects/1" onClick={handleClick}>
            <span className="underline-effect">projects</span>
          </Link>
        </li>
      </nav>
      <div className="nav-contact">
        <p>QUESTIONS?</p>
        <p className="nav-email">benassipb@gmail.com</p>
      </div>
    </div>
  );
}

export default NavSidebar;
