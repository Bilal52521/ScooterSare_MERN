import React from "react";
import "../Styles/Section5.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonial = [
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

    {
      name: "Elena Buckley",
      title: "Founder of Amazon",
      image: "/Assets/s8img4.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
  ];

  return (
    <div className="testimonials-page">
      <h1>All Testimonials</h1>
      <div className="testimonials-grid">
        {testimonial.map((testimonials, index) => (
          <div className="testimonial-card" key={index}>
            <FaQuoteLeft className="quote-icon" />
            <p>{testimonials.text}</p>
            <img
              src={testimonials.image}
              alt={testimonials.name}
              className="testimonial-image"
            />
            <h3>{testimonials.name}</h3>
            <h4>{testimonials.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
