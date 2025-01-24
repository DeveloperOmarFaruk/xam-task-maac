import React from "react";
import "./WeProvide.css"; // Importing custom CSS for styling the component
import icon1 from "../../assets/fullPackage.png"; // Importing the image for 'Full exam packages' icon
import icon2 from "../../assets/facilatior.png"; // Importing the image for 'Top facilitator' icon
import icon3 from "../../assets/tircks.png"; // Importing the image for 'Best tricks for the exam' icon
import icon4 from "../../assets/highest.png"; // Importing the image for 'Highest scores' icon

const WeProvide = () => {
  return (
    <>
      <div className="we-provide-div">
        <section className="we-provide-section">
          {/* Title of the section */}
          <div className="we-provide-title text-center">
            <h3>We will provide you</h3>{" "}
            {/* Heading for what the service will provide */}
          </div>

          {/* Section containing the cards for different offerings */}
          <div className="we-provide-card-div">
            {/* Card 1: Full Exam Packages */}
            <div className="we-provide-card">
              <img src={icon1} alt="card_icon" />{" "}
              {/* Image representing full exam packages */}
              <h5>
                Full
                <br /> exam packages {/* Text describing the offering */}
              </h5>
            </div>
            <h3>+</h3> {/* Plus sign between cards */}
            {/* Card 2: Top Facilitator */}
            <div className="we-provide-card">
              <img src={icon2} alt="card_icon" />{" "}
              {/* Image representing top facilitator */}
              <h5>
                Top
                <br /> facilitator {/* Text describing the offering */}
              </h5>
            </div>
            <h3>+</h3> {/* Plus sign between cards */}
            {/* Card 3: Best Tricks for the Exam */}
            <div className="we-provide-card">
              <img src={icon3} alt="card_icon" />{" "}
              {/* Image representing best tricks */}
              <h5>
                Best tricks <br />
                for the exame {/* Text describing the offering */}
              </h5>
            </div>
            <h3>=</h3> {/* Equal sign indicating the result */}
            {/* Card 4: Highest Scores */}
            <div className="we-provide-card">
              <img src={icon4} alt="card_icon" />{" "}
              {/* Image representing highest scores */}
              <h5>
                Highest
                <br /> scores{" "}
                {/* Text describing the result of the offerings */}
              </h5>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeProvide;
