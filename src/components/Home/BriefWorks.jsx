import React from "react";
import { Link } from "react-router-dom";
import "./BriefWorks.css";

function BriefWorks() {
  return (
    <div className="works_container">
    <ul className="container_w">
      <li>
        <h1>Works</h1>
      </li>
      <li>
        <div className="works_border"></div>
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
        <Link to="/works_skills" className="works_btn">
          Detail
        </Link>
      </li>
    </ul>
  </div>
  );
}

export default BriefWorks;
