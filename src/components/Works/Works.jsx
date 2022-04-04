import React from "react";
import wetherApp from "../../images/weatherApp.png";
import "./Works.css";
import html from "../../images/html.png";
import css from "../../images/css.png";
// import sass from "../../images/sass.png";
// import js from "../../images/js.png";
// import react from "../../images/react.png";
// import typescript from "../../images/typescript.png";
import projectsElements from "../../projectsElements";

function Works() {
  return (
    <div className="works_container">
      {projectsElements.map((project) => (
        <div className="works_card" key={project.id}>
          <img src={wetherApp} className="card_pic" alt="card" />
          <h2 className="card_title">{project.title}</h2>
          <p className="card_description">{project.description}</p>
          <h5>-Techonologies-</h5>
          <div className="tech_icons">
            {project.technology.map((tech) => (
              <img src={tech} alt="icons" />
            ))}
          </div>
          <div className="button">
            <a href="#" className="github">
              github
            </a>
            <a href="#" className="app">
              App
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
