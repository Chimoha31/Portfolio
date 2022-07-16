import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/works" className="nav-link">
              <i className="fab fa-react"></i>
              Works
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/contact" className="nav-link">
              <i className="fas fa-mail-bulk"></i>
              Contact
            </Link>
          </li>
          <li className="nav-item active nav-link">
            <a href="Chiho-Resume.pdf" download="Resume_ChihoMaekawa">
              <i className="fas fa-download"></i>Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
