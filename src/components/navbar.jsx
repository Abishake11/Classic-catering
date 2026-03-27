import React from "react";
import './navbar.css';

// images import
import logo from '../assets/logo.png'

function Navbar() {

  return (
     <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <img src={logo} className="logo" alt=""/>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                Service
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" href="#">
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;