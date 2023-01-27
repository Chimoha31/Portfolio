import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <i
          data-aos="zoom-in-left"
          className="fa-brands fa-github"
          onClick={() =>
            (window.location.href = "https://github.com/Chimoha31")
          }
        ></i>
        <i
          data-aos="zoom-in-left"
          className="fa-brands fa-linkedin"
          onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/chiho1108developer/")
          }
        ></i>
        <p data-aos="zoom-in-righht">
          ©2023 - Chiho Maekawa / All Rights Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
