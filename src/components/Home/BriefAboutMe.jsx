import React from "react";
import "./BriefAboutMe.css";
import { Link } from "react-router-dom";

function BriefAboutMe() {
  return (
    <div className="aboutme_container">
      <ul className="container">
        <li>
          <h1>About Me</h1>
        </li>
        <li>
          <div className="aboutme_border"></div>
        </li>
        <li>
          <p>
            A front-end developer who enjoys building creative websites and
            applications, and I love to create websites to imagine people's
            smiles with my works. I always think of helping people's daily life
            with my works. It is no exaggeration to say that I make works to make
            people smile. Also, I'm a hard worker who combines a passion for web
            development by using all of my knowledge. The below botton is my timeline of education and work experience.
          </p>
        </li>
        <li>
          <Link to="/aboutme" className="aboutme_btn">
            Detail
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BriefAboutMe;
