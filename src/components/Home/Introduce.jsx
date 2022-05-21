import React from "react";
import "./Introduce.css";
import Scroll from "../parts/Scroll";

function Introduce() {
  return (
    <div className="introduce_container">
      <div className="introduce">
        <h2>Hi, I am</h2>
        <h1>Chiho Maekawa</h1>
        <p>Front-End-Developer</p>
      </div>
      <div>
        <Scroll />
      </div>
    </div>
  );
}

export default Introduce;
