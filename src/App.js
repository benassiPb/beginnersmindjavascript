import "./App.css";
import Posts from "./Posts.js";
import About from "./About.js";
import Nav from "./Nav.js";
import Projects from "./Projects.js";
import React, { useState } from "react";

function App() {
  const [view, setView] = useState("Writing");

  return (
    <div className="App">
      <div>
        <Nav view={view} setView={setView} />
      </div>
      <p>*Website currently under construction...</p>

      {view === "Writing" ? <Posts /> : null}
      {view === "About" ? <About /> : null}
      {view === "Projects" ? <Projects /> : null}
    </div>
  );
}

export default App;
