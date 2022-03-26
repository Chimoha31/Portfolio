import React from "react";
import styled from "styled-components";
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            totam inventore libero ducimus quasi corrupti tempore dolore
            assumenda fugit iure. Pariatur harum fugiat laborum quidem,
            voluptates assumenda amet libero facilis!
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
