import React from "react";
import "../Styles/Section6.css";
import "../Styles/Faqs.css";

const Section6 = () => {
  const sectionStyle = {
    padding: "0rem 9rem",
    backgroundImage: "url(/Assets/s1backinverse.PNG)", // Ensure the path is correct
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
      features: [
        "Rent a scooter 24/7",
        "Drive around the whole city",
        "Recharging anywhere",
      ],
    },
    {
      id: "basic-plan",
      title: "Basic",
      price: "$169",
      features: [
        "Rent a scooter 24/7",
        "Drive around the whole city",
        "Drive 10 miles a month",
        "Automatic recharge anywhere",
      ],
    },
    {
      id: "big-plan",
      title: "Big",
      price: "$239",
      features: [
        "Rent a scooter 24/7",
        "Drive around the whole city",
        "Recharging anywhere",
        "Drive 10 miles a month",
        "Automatic recharge anywhere",
      ],
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

const Faqs = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
  ];

  return (
    <div className="faqs-container">
      <h1 className="faq-heading">FAQ</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFaq(index)}
        >
          <span className="faq-question">{faq}</span>
          <span className="faq-toggle">
            {activeIndex === index ? "-" : "+"}
          </span>
          {activeIndex === index && (
            <div className="faq-answer">
              This is the answer for {faq.toLowerCase()}.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Pricing;
