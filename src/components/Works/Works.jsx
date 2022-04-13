import React from "react";
import "./Works.css";
import projectsElements from "../../projectsElements";

function Works() {
  return (
    <div className="works_container">
      {projectsElements.map((project) => (
        <div className="works_card" key={project.id}>
            <img src={project.image} className="card_pic" alt="card" />
          <h2 className="card_title">{project.title}</h2>
          <p className="card_description">{project.description}</p>
          <h5>-Techonologies-</h5>
          <div className="tech_icons">
            {project.technology.map((tech, index) => (
              <img src={tech} alt="icons" key={index} />
            ))}
          </div>
          <div className="button">
            <a href={project.github} className="github">
              github
            </a>
            <a href={project.app} className="app">
              App
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
