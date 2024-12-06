import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { FaCircle } from "react-icons/fa"; // Import FaCircle from react-icons/fa
import "./../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Top Header */}
      <div className="top-bar">
        <div className="top-bar-left">
          <FaCircle style={{ color: "#00ff00", fontSize: "8.8px" }} /> {/* Green circle icon */}
          <span className="hiring-text">Hiring</span>
        </div>
        <div className="contact-info">
          <span className="phone">
            <i className="fas fa-phone-alt"></i> 06 12 34 56 78
          </span>
          <span className="email">
            <i className="fas fa-envelope"></i> info@scootershare.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="./Assets/logotop.png" alt="logo" className="logo" />
            <span className="logo-text">SCOOTERSHARE</span>
          </Link>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <div className={`menu ${isOpen ? "open" : ""}`}>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li className="dropdown">
                About
                <ul className="dropdown-menu">
                  <li><Link to="/Ourteam">Team</Link></li>
                  <li><Link to="/Ourteammission">Mission</Link></li>
                </ul>
              </li>
              <li><Link to="/Testimonials">Testimonials</Link></li>
              <li><Link to="/Jobs">Jobs</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li>
                <Link to="/Pricing" className="pricing-button">Pricing</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
