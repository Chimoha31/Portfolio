import React, { useState } from "react";
import "./Header.css";
import logo from "../../data/images/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [responsive, setResponsive] = useState(false);

  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right"/>
          </div>

          {/* nav */}
          <div className={responsive ? "hideMenu" : "nav"} data-aos="zoom-in-left">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
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
