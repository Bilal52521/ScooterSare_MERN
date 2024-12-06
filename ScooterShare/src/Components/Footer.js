import React from "react";
import "./../Styles/Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/Assets/logobottom.png" alt="ScooterShare Logo" className="logo-image" />
          <h1 id="fh1">SCOOTERSHARE</h1>
          <p>Scootershare is a company that rents out scooters in big cities. We connect people.</p>
          <p>Email: info@scootershare.com</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            
             <a href="/about">About</a> <br />
             <a href="/testimonials">Testimonials</a><br />
              <a href="/jobs">Jobs</a><br />
             <a href="/blog">Blog</a>
           
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
          
              <a href="/privacy">Privacy Policy</a> <br />
              <a href="/terms">Terms & Conditions</a><br />
              <a href="/refund">Refund Policy</a>
           
          </div>
        </div>
        <div className="footer-social">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaLinkedinIn className="social-icon" />
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="copyright">&copy; 2022 ScooterShare.</p>
        <p className="rights">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
