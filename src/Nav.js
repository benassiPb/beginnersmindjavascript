import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

function Nav(props) {
  const [darkMode, setDarkMode] = useState(0);
  return (
    <div className="header">
      <div className="nav-top-container">
        <h1 className="title">
          beginner's mind
          <span className="cursive ">JavaScript</span>
        </h1>
      </div>
      <div className="nav-bottom-container">
        <nav className="nav-links">
          <li className="nav-link">
            <div className="inline">
              <Link to="/posts">writing</Link>
            </div>
          </li>

          <li className="nav-link">
            <div className="inline">
              <Link to="/projects">projects</Link>
            </div>
          </li>

          <li className="nav-link">
            <div className="inline">
              <Link to="/about">about</Link>
            </div>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
