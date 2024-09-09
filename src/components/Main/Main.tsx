import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Main.scss";

import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import Projects from "../Projects/Projects";

export default function Main() {
  return (
    <div className="main">
      <div className="intro">
        <p className="name">Nick Maniutin</p>
        <p className="title">Software Developer & Designer</p>
      </div>
      <Router>
        <Nav />
        <section className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </Router>
    </div>
  );
}
