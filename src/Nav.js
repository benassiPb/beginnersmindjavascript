import React from "react";

function Nav(props) {
  const { view, setView } = props;
  return (
    <div className="header">
      <div className="nav-top-container">
        <h1 className="title">
          beginner's mind <span className="cursive">JavaScript</span>
        </h1>
      </div>
      <div className="nav-bottom-container">
        <nav className="nav-links">
          <li className="nav-link">
            <div className="inline" onClick={() => setView("Writing")}>
              {view === "Writing" ? (
                <span className="bold">writing</span>
              ) : (
                <span>writing</span>
              )}
            </div>
          </li>

          <li className="nav-link">
            <div className="inline" onClick={() => setView("Projects")}>
              {view === "Projects" ? (
                <span className="bold">projects</span>
              ) : (
                <span>projects</span>
              )}
            </div>
          </li>

          <li className="nav-link">
            <div className="inline" onClick={() => setView("About")}>
              {view === "About" ? (
                <span className="bold">about</span>
              ) : (
                <span>about</span>
              )}
            </div>
          </li>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
