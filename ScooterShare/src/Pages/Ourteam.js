import React from "react";
import "../Styles/Ourteam.css";
import Ourteammission from "./../Components/Ourteammission";

const OurTeam = () => {
  return (
    <>
      <section
        className="our-team-section"
        style={{
          backgroundImage: "url(/Assets/s1back.png)", // Ensure the path is correct
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "50px 20px",
        }}
      >
        <div className="team-container">
          <div className="text-content">
            <h2 className="section-title">Our story</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem.
            </p>
            <p className="section-description">
              Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className="image-content">
            <img
              src="/Assets/ourteam.jpg" // Use require for inline image
              alt="Our Team"
              className="team-image"
            />
          </div>
        </div>
      </section>
      <Ourteammission />
    </>
  );
};

export default OurTeam;
