import React, { useEffect, useState } from "react";
import "./../Styles/Section6.css";
import "./../Styles/Faqs.css";

const Section6 = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sectionStyle = isMobile
    ? {
      padding: "0px 172px 1px 127px",
        backgroundImage: "url(/Assets/s1backinverse.PNG)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "rgb(51, 51, 51)",
      }
    : {
        padding: "0rem 9rem",
        backgroundImage: "url(/Assets/s1backinverse.PNG)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "#333",
      };

  const pricingPlans = [
    {
      id: "small-plan",
      title: "Small",
      price: "$139",
      features: ["Rent a scooter 24/7", "Drive around the whole city", "Recharging anywhere"],
    },
    {
      id: "basic-plan",
      title: "Basic",
      price: "$169",
      features: ["Rent a scooter 24/7", "Drive around the whole city", "Drive 10 miles a month", "Automatic recharge anywhere"],
    },
    {
      id: "big-plan",
      title: "Big",
      price: "$239",
      features: ["Rent a scooter 24/7", "Drive around the whole city", "Recharging anywhere", "Drive 10 miles a month", "Automatic recharge anywhere"],
    },
  ];

  return (
    <section className="section6" style={sectionStyle}>
      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <div className="pricing-card" id={plan.id} key={plan.id}>
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="checkbox"></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="pricing-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section6;
