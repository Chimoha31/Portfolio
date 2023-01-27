import React, { useState } from "react";
import "./Header.css";
import logo from "../../data/images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [responsive, setResponsive] = useState(false);
  console.log(responsive);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </div>

          <div className={responsive ? "hideMenu" : "nav"}>
            <Link to="/" data-aos="zoom-in-left">
              Home
            </Link>
            <Link
              to="/about"
              data-aos="zoom-in-left"
              onClick={() => setResponsive(false)}
            >
              About
            </Link>
            <Link
              to="/projects"
              data-aos="zoom-in-left"
              onClick={() => setResponsive(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              data-aos="zoom-in-left"
              onClick={() => setResponsive(false)}
            >
              Contact
            </Link>
          </div>
          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            <MenuIcon className="icon"></MenuIcon>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
