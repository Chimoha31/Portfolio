import React from "react";
import { Link } from "react-router-dom";
import "./BriefWorks.css";
import Skills from "./Skills";

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
            I Have developed several websites and applications by using the
            following skills.
          </p>
        </li>
        <li>
          <Skills />
        </li>
        <li className="work_detail">
          <Link to="/works_skills" className="works_btn">
            Detail
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default BriefWorks;
