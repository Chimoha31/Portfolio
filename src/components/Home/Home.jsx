import React from "react";
import AnimationTitle from "./AnimationTitle";
import Introduce from "./Introduce";
import BriefAboutMe from "./BriefAboutMe";
import BriefWorks from "./BriefWorks";
import "./Home.css";

function Home() {
  return (
    <div className="home_container">
      <AnimationTitle />
      <Introduce />
      <BriefAboutMe />
      <BriefWorks />
    </div>
  );
}

export default Home;
