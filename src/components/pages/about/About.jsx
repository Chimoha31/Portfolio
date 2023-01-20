import React from "react";
import "./About.css";
import Chiho from "../../data/images/chiho.JPG";
import Heading from "../../common/heading/Heading";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          <div className="left" data-aos="fade-down-right">
            <img src={Chiho} alt="" className="chiho_pic" />
          </div>
          <div className="right" data-aos="fade-down-left">
            <Heading title="About Me" />
            <p>
              A front-end developer who enjoys building creative websites and
              applications. I love to create websites that put smiles on
              people's faces.
            </p>
            <p>
              I always think of helping people's daily life with my work. I'm a
              hard worker who possesses a passion for web development by
              combining all of my knowledge and skills. Thank you for your time
              and consideration
            </p>
            <button>Download CV</button>
            <button className="primaryBtn">Download CV</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
