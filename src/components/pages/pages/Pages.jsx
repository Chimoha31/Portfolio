import React from "react";
import "./Pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../../common/header/Header";
import Home from "../../home/home/Home";
import About from "../about/About";
import Portfoliio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../../common/footer/Footer";

const Pages = () => {
  return <>
  <Router>
    <Header />
    <Routes>
      <Route exact path="/"  element={<Home />} />
      <Route exact path="/about"  element={<About />} />
      <Route exact path="/projects"  element={<Portfoliio />} />
      <Route exact path="/contact"  element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
  </>;
};

export default Pages;
