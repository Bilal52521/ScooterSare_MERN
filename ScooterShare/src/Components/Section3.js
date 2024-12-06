import React from "react";
import "./../Styles/Section3.css";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="background-images">
        <img src="/Assets/s4greencircle.png" alt="Green Circle" className="circle green-circleh" />
        <img src="/Assets/s3ringpurple.png" alt="Purple Circle" className="circle purple-circleh" />
      </div>
      <div className="contents3">
        <div className="section3-header">
          <h2>Our Features</h2>
          <p> The only thing you need is a mobile phone
          Lorem ipsum dolor sit amet consectetur adipisicing elitQuia deleniti. <br/> Quia deleniti labore reprehenderit suscipit? Dolorib Quia deleniti.</p>
        </div>
        <div className="features">
          <div className="feature" id="s3-1">
            <h3>Find a Scooter</h3>
            <p className="styled-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div className="feature-image-wrapper" id="s3img1">
            <img src="/Assets/s4scoter.png" alt="Scooter" className="feature-image" />
          </div>
          <div className="feature-image-wrapper">
            <img src="/Assets/s3di.png" alt="Map" className="feature-image" />
          </div>
          <dir className="features">
          <div className="feature" id="s3-easyfun">
            <h3>Easy & Fun</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor.</p>
            <ul className="feature-list">
              <li><span className="checkbox"></span>Benefit 1</li>
              <li><span className="checkbox"></span>Benefit 2</li>
              <li><span className="checkbox"></span>Benefit 3</li>
            </ul>
          </div>
          </dir>
          <div className="feature" id="pay" >
            <h3>Pay per Minute</h3>
            <p className="styled-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <button className="btns3">Check our packages</button>
          </div>
          <div className="feature-image-wrapper" id="s3-6">
            <img src="/Assets/s5map.png" alt="Map" className="feature-image"  id="map"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
