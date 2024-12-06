import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  const backgroundStyle = {
    backgroundImage: "url(/Assets/s1back.png)", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "50px 0",
    color: "#fff",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    color: "#333",
    padding: "20px",
    width: "300px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "10px",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={backgroundStyle}>
      <div className="contact-container">
        <h1 className="contact-heading">Contact</h1>
        <p className="contact-subheading">
          Our dedicated and friendly support team is here to help
        </p>

        <div className="contact-cards">
          <div className="contact-card" style={cardStyle}>
            <i className="fa fa-phone contact-icon"></i>
            <h2>Phone</h2>
            <p>06 12 34 56 78</p>
            <a href="tel:0612345678" className="contact-link">
              Call now
            </a>
          </div>

          <div className="contact-card" style={cardStyle}>
            <i className="fa fa-envelope contact-icon"></i>
            <h2>Mail</h2>
            <p>info@scootershare.com</p>
            <a href="mailto:info@scootershare.com" className="contact-link">
              Mail now
            </a>
          </div>

          <div className="contact-card" style={cardStyle}>
            <i className="fa fa-whatsapp contact-icon"></i>
            <h2>WhatsApp</h2>
            <p>06 12 34 56 78</p>
            <a href="https://wa.me/0612345678" className="contact-link">
              WhatsApp now
            </a>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.674996742896!2d-0.1180929842289397!3d51.50986557963698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333f96e839%3A0x93b1bb7e8c12b1a4!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1699999955555!5m2!1sen!2suk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        <div className="info-container" id="form1">
          <div className="info-content">
            <h2>Company info</h2>
            <p>Company Address</p>
            <p>Tax ID: 123456789</p>
            <p>Phone: 06 12 34 56 78</p>
            <p>Email: info@scootershare.com</p>
          </div>
          <div className="contact-us">
            <h2>Contact us</h2>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
