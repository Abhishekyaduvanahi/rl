import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Education from "./pages/Education";
import Project from "./pages/Project";

const Section = ({ name, children }) => (
  <Element name={name}>{children}</Element>
);

const App = () => {
  return (
    <Router>
      <Header />
      <Section name="home">
        <Home />
      </Section>
      <Section name="about">
        <About />{" "}
      </Section>
      <Section name="education">
        <Education />
      </Section>
      <Section name="projects">
        <Project />
      </Section>
      {/* <Section name="portfolio">📸 Portfolio</Section> */}
      <Section name="contact">
        <Contact />
      </Section>
      <Footer />
    </Router>
  );
};

export default App;
