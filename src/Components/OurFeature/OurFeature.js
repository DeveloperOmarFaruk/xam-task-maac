import React from "react";
import "./OurFeature.css"; // Importing the CSS for styling
import icon1 from "../../assets/fullExam.png"; // Importing icon images
import icon2 from "../../assets/instantResult.png";
import icon3 from "../../assets/checkPerformance.png";
import icon4 from "../../assets/review.png";

const OurFeature = () => {
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

          {/* Small card section for the first feature */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="our-feature-small-card">
              <img src={icon1} alt="icon" /> {/* Icon for feature */}
              <h6>Full exam packages</h6> {/* Title for the feature */}
              <p>
                IELTS general & academic Speaking, reading, writing full mock
                module
              </p>
              {/* Link to see more about this feature */}
              <p>
                More <i className="fa-solid fa-arrow-right ms-2"></i>
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Small card section for the second feature */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="our-feature-small-card">
              <img src={icon2} alt="icon" /> {/* Icon for feature */}
              <h6>Instant Result</h6> {/* Title for the feature */}
              <p>
                IELTS general & academic Speaking, reading, writing full mock
                module
              </p>
              {/* Link to see more about this feature */}
              <p>
                More <i className="fa-solid fa-arrow-right ms-2"></i>
              </p>
            </div>
          </div>

          {/* Small card section for the third feature */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="our-feature-small-card">
              <img src={icon3} alt="icon" /> {/* Icon for feature */}
              <h6>Check Performance</h6> {/* Title for the feature */}
              <p>
                IELTS general & academic Speaking, reading, writing full mock
                module
              </p>
              {/* Link to see more about this feature */}
              <p>
                More <i className="fa-solid fa-arrow-right ms-2"></i>
              </p>
            </div>
          </div>

          {/* Small card section for the fourth feature */}
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3">
            <div className="our-feature-small-card">
              <img src={icon4} alt="icon" /> {/* Icon for feature */}
              <h6>Facilitator Review</h6> {/* Title for the feature */}
              <p>
                IELTS general & academic Speaking, reading, writing full mock
                module
              </p>
              {/* Link to see more about this feature */}
              <p>
                More <i className="fa-solid fa-arrow-right ms-2"></i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFeature;
