import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Routes,
  useParams,
} from "react-router-dom";
import Projects from "./Projects";
import Posts from "./Posts";
import About from "./About";
import Home from "./Home";
import Error from "./Error";
import Services from "./Services";
import Shop from "./Shop";
import SampleCoffee from "./SampleCoffee";
import SampleCreative from "./SampleCreative";
import SampleYoga from "./SampleYoga";
import SampleNonprofit from "./SampleNonprofit";
import SampleEco from "./SampleEco";
import SampleProfessional from "./SampleProfessional";
import SampleBooks from "./SampleBooks";
import SampleSites from "./SampleSites";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:postId" element={<Posts />} />
      <Route path="/projects/:projectId" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/samplesites" element={<SampleSites />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/coffee" element={<SampleCoffee />} />
      <Route path="/eco" element={<SampleEco />} />
      <Route path="/books" element={<SampleBooks />} />
      <Route path="/yoga" element={<SampleYoga />} />
      <Route path="/nonprofit" element={<SampleNonprofit />} />
      <Route path="/creative" element={<SampleCreative />} />
      <Route path="/professional" element={<SampleProfessional />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default RoutesComponent;
