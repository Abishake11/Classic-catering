import React from "react";
import "./navbar.css";

import { useState } from "react";

// images import
import logo from "../assets/logo.png";

import plate from "../assets/icon-assets/plate.png";
import insta from "../assets/icon-assets/insta.png";
import fb from "../assets/icon-assets/fb.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="page-wrapper">
      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <img src={logo} className="logo" alt="" />

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // X icon — shown when menu is open
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 5L19 19M19 5L5 19"
                  stroke="#FCF8E3"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            ) : (
              // Hamburger icon — shown when menu is closed
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="6" width="18" height="2" rx="1" fill="#FCF8E3" />
                <rect
                  x="3"
                  y="11"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#FCF8E3"
                />
                <rect
                  x="3"
                  y="16"
                  width="18"
                  height="2"
                  rx="1"
                  fill="#FCF8E3"
                />
              </svg>
            )}
          </button>

          <div
            className={`mobile-drawer ${isOpen ? "open" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#home"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#service"
                  onClick={() => setIsOpen(false)}
                >
                  Service
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#client"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonial
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#footer"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
 
              </li>

              <li>
                <div className="taste" >
                  <img src={plate} alt="" className="me-2" />
                  <span className="pop banimate">FREE SAMPLE TASTE</span>
                </div>
              </li>

              <li>
                <div className="d-flex gap-3">
                  <a href="https://www.instagram.com/classic__catering/?hl=en">
                    <img src={insta} alt="" className="insta" />
                  </a>

                  <a href="https://www.facebook.com/profile.php?id=61588091875870">
                    <img src={fb} alt="" className="fb" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
