import React from "react";
import { Link } from "react-router-dom";

function NavSidebar() {
  return (
    <div className="nav-sidebar">
      <nav className="nav-links">
        <li className="nav-link">
          <div className="inline">
            <Link to="/about">about</Link>
          </div>
        </li>
        <li className="nav-link">
          <div className="inline">
            <Link to="/posts/1">writing</Link>
          </div>
        </li>

        <li className="nav-link">
          <div className="inline">
            <Link to="/projects/1">projects</Link>
          </div>
        </li>
        <li className="nav-link">
          <div className="inline">
            <Link to="/services">services</Link>
          </div>
        </li>
        <li className="nav-link">
          <div className="inline">
            <Link to="/shop">shop</Link>
          </div>
        </li>
      </nav>
    </div>
  );
}

export default NavSidebar;
