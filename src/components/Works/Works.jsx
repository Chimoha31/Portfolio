import React from "react";
import wetherApp from "../../images/weatherApp.png";
import "./Works.css";
import html from '../../images/html.png';
import css from '../../images/css.png';
import sass from '../../images/sass.png';
import js from '../../images/js.png';
import react from '../../images/react.png';
import typescript from '../../images/typescript.png';

function Works() {
  return (
    <div className="works_container">
      <div className="works_card">
        <img src={wetherApp} className="card_pic" alt="card" />
        <h2 className="card_title">This is App Title</h2>
        <p className="card_description">
          This is App description. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </p>
        <h5>-Techonologies-</h5>
        <div className="tech_icons">
          <img src={css} alt="css"/>
          <img src={html} alt="html"/>
          <img src={js} alt="js"/>
          <img src={typescript} alt="ts"/>
          <img src={sass} alt="sass"/>
          <img src={react} alt="react"/>
        </div>
        <div className="button">
          <a href="#" className="github">github</a>
          <a href="#" className="app">App</a>
        </div>
      </div>
      <div className="works_card">
        <img src={wetherApp} className="card_pic" alt="card" />
        <h2 className="card_title">This is App Title</h2>
        <p className="card_description">
          This is App description. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </p>
        <h5>-Techonologies-</h5>
        <div className="tech_icons">
          <img src={css} alt="css"/>
          <img src={html} alt="html"/>
          <img src={js} alt="js"/>
          <img src={typescript} alt="ts"/>
          <img src={sass} alt="sass"/>
          <img src={react} alt="react"/>
        </div>
        <div className="button">
          <a href="#" className="github">github</a>
          <a href="#" className="app">App</a>
        </div>
      </div>
      <div className="works_card">
        <img src={wetherApp} className="card_pic" alt="card" />
        <h2 className="card_title">This is App Title</h2>
        <p className="card_description">
          This is App description. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </p>
        <h5>-Techonologies-</h5>
        <div className="tech_icons">
          <img src={css} alt="css"/>
          <img src={html} alt="html"/>
          <img src={js} alt="js"/>
          <img src={typescript} alt="ts"/>
          <img src={sass} alt="sass"/>
          <img src={react} alt="react"/>
        </div>
        <div className="button">
          <a href="#" className="github">github</a>
          <a href="#" className="app">App</a>
        </div>
      </div>
    </div>
  );
}

export default Works;
