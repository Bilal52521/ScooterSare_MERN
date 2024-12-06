import React, { useEffect } from "react";
import "./../Styles/Section1.css";

const Section1 = () => {
  useEffect(() => {
    const handleResize = () => {
      const section = document.querySelector(".section1");
      if (window.innerWidth <= 768) {
        section.classList.add("mobile");
      } else {
        section.classList.remove("mobile");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set the styles based on current screen size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="section1">
      <div className="content">
        <h1>
          The scooter for
          
          your journey
          <span className="highlight">
            <span className="highlight-line">
              <img src="/Assets/greenline.png" alt="Highlight" />
            </span>
          </span>
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque et
          ultricies nisi vel augue.
        </p>
        <div className="buttons">
          <button className="btn green-btn">Check our prices</button>
          <button className="btn outline-btn">More about us</button>
        </div>
      </div>
      <div className="images">
        <img
          src="/Assets/s1green.png"
          alt="Green Background"
          className="background green-background"
        />
        <img
          src="/Assets/s1purple.png"
          alt="Purple Background"
          className="background purple-background"
        />
        <img src="/Assets/scooter.PNG" alt="Scooter" className="scooter-image" />
      </div>
    </section>
  );
};

export default Section1;
