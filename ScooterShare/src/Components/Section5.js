import React from "react";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import "./../Styles/Section5.css";

const Section5 = () => {
  const testimonials = [
    {
      name: "Jan de Jong",
      title: "Founder of Apple",
      image: "/Assets/s8img1.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      name: "Chelsey Whitmore",
      title: "Founder of Google",
      image: "/Assets/s8img2.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      name: "Loren Stamp",
      title: "Founder of Microsoft",
      image: "/Assets/s8img3.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      name: "Elena Buckley",
      title: "Founder of Amazon",
      image: "/Assets/s8img4.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ];

  return (
    <section className="section5">
      <div className="section-header">
        <h2>Testimonials</h2>
        <Link to="/Testimonials" className="see-more-link">See more testimonials</Link>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p>{testimonial.text}</p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <div className="name-title">
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
