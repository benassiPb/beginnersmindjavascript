import "./App.css";
import Writing from "./Writing.js";
import About from "./About.js";
import Connect from "./Connect.js";
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

      {view === "Writing" ? <Writing /> : null}
      {view === "About" ? <About /> : null}
      {view === "Projects" ? <Projects /> : null}
    </div>
  );
}

export default App;
