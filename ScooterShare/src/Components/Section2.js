import React from "react";
import "./../Styles/Section2.css";
import { FaApple, FaGoogle, FaDiscord, FaReddit, FaSlack, FaAppStore } from "react-icons/fa";

const Section2 = () => {
  return (
    <section className="section2">
      <h2>Our clients</h2>
      <div className="client-logos">
        <FaApple className="client-icon" />
        <FaGoogle className="client-icon" />
        <FaDiscord className="client-icon" />
        <FaReddit className="client-icon" />
        <FaSlack className="client-icon" />
        <FaAppStore className="client-icon" />
      </div>
    </section>
  );
};

export default Section2;
