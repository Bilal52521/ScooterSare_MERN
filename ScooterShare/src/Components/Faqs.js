import React, { useState } from "react";
import "./../Styles/Faqs.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "Question ",
    "Question ",
    "Question ",
    "Question ",
    "Question ",
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

export default Faqs;
