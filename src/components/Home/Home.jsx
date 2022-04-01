import React from "react";
import AnimationTitle from "./AnimationTitle";
import Introduce from './Introduce';
import BriefAboutMe from './BriefAboutMe';
import BriefWorks from './BriefWorks';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {
  return (
    <div className="home_container">
      <AnimationTitle />
      <Introduce />
      <BriefAboutMe />
      <BriefWorks />
      <Footer />
    </div>
  );
}


export default Home;
