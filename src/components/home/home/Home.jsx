import React from 'react';
import About from '../../pages/about/About';
import Contact from '../../pages/contact/Contact';
import Portfoliio from '../../pages/portfolio/Portfoliio';
import Hero from '../hero/Hero';
import './Home.css';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfoliio />
      <Contact />
    </>
  )
}

export default Home
