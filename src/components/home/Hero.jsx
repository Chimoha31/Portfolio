import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import Example from "./Example";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="heroContainer">
          <h3>Hello I am </h3>
          <h1>
            <Typewriter
              options={{
                strings: ["Chiho Maekawa", "Frontend Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>A Frontend Developer based in Vancouver.</p>
          <button className="primaryBtn">Download Resume</button>
        </div>
      </section>
    </>
  );
};

export default Hero;
