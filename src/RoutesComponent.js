import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  Routes,
} from "react-router-dom";
import Projects from "./Projects";
import Posts from "./Posts";
import About from "./About";
import Home from "./Home";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/posts/:id" element={<Posts />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/projects/:id" element={<Projects />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default RoutesComponent;
