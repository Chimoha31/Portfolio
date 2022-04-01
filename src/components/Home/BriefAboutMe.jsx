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
            applications. I love to create websites that put smiles on people's
            faces. I always think of helping people's daily life with my work.
            I'm a hard worker who possesses a passion for web development by
            combining all of my knowledge and skills. Below is a timeline of
            my education and work experience.
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
