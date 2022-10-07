import React from "react";
import { Link } from "react-router-dom";

function NavSidebar(props) {
  const { handleClick } = props;
  return (
    <div className="nav-sidebar">
      <nav className="nav-links">
        <li className="nav-link">
          <Link to="/about" onClick={handleClick}>
            <span className="underline-effect">about</span>
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
    </div>
  );
}

export default NavSidebar;
