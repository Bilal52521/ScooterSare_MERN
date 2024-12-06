import React from "react";
import "./../Styles/Section4.css";
import { FaBolt, FaLeaf, FaDollarSign, FaSmile, FaBatteryFull, FaShieldAlt } from "react-icons/fa";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="section-header">
        <h2>Our vehicles are electric.
          <span className="subtitle">They are energy efficient, environment friendly, and cost-effective.They are energy efficient, environment friendly, and cost-effective.</span>
        </h2>
      </div>
      <div className="features-grid">
        <div className="feature-card">
          <FaBolt className="feature-icon" />
          <h3>Charge points</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
        <div className="feature-card">
          <FaLeaf className="feature-icon" />
          <h3>Nature friendly</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
        <div className="feature-card">
          <FaDollarSign className="feature-icon" />
          <h3>Affordable price</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
        <div className="feature-card">
          <FaSmile className="feature-icon" />
          <h3>100% Green</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
        <div className="feature-card">
          <FaBatteryFull className="feature-icon" />
          <h3>Fast charging</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>High quality</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </div>
      </div>
      <div className="promo-banner">
        <img src="/Assets/s7banner.jpg" alt="Promo Banner" />
        <div className="promo-text">
          <h2>Want to go for a ride?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <button>Check pricing</button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
