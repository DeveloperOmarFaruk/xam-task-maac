import React from "react";
import "./OurFeature.css"; // Importing the CSS for styling
import icon1 from "../../assets/fullExam.png"; // Importing icon images
import icon2 from "../../assets/instantResult.png";
import icon3 from "../../assets/checkPerformance.png";
import icon4 from "../../assets/review.png";

const OurFeature = () => {
  // Data array for feature cards
  const features = [
    {
      id: 1,
      icon: icon1,
      title: "Full exam packages",
      description:
        "IELTS general & academic Speaking, reading, writing full mock module",
    },
    {
      id: 2,
      icon: icon2,
      title: "Instant Result",
      description:
        "IELTS general & academic Speaking, reading, writing full mock module",
    },
    {
      id: 3,
      icon: icon3,
      title: "Check Performance",
      description:
        "IELTS general & academic Speaking, reading, writing full mock module",
    },
    {
      id: 4,
      icon: icon4,
      title: "Facilitator Review",
      description:
        "IELTS general & academic Speaking, reading, writing full mock module",
    },
  ];

  return (
    <>
      <section className="our-feature-section">
        <div className="row">
          {/* Big card section for displaying a heading and button */}
          <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="our-feature-big-card">
              <h3>
                Our special features
                <br />
                for students
              </h3>
              {/* Button to see features */}
              <button>See Features</button>
            </div>
          </div>
          {/* Small card section for the feature */}
          {features.map((feature) => (
            <div
              key={feature.id}
              className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3"
            >
              <div className="our-feature-small-card">
                <img src={feature.icon} alt="icon" /> {/* Icon for feature */}
                <h6>{feature.title}</h6> {/* Title for the feature */}
                <p>{feature.description}</p> {/* Description for the feature */}
                <p>
                  More <i className="fa-solid fa-arrow-right ms-2"></i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurFeature;
