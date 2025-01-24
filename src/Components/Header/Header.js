import React, { useState } from "react"; // Importing React and useState hook for state management.
import "./Header.css"; // Importing the CSS file for styling the component.
import headerPic from "../../assets/headerPic.png"; // Importing the header image to display on the header section.
import videoIcon from "../../assets/videoIcon.png"; // Importing the video icon for the "See how it's work" button.

const Header = () => {
  // State to manage the visibility of the modal.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal by setting the state to true.
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal by setting the state to false.
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="home-header-root-div">
        {/* Main wrapper div for the header component */}
        <div className="home-header-div">
          <section className="home-header-sction">
            {/* Header content divided into two sections: text and image */}
            <div className="row">
              {/* Left section: text content */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-5">
                <div className="header-info-div">
                  {/* Main heading with styled text */}
                  <h3>
                    Complete your <span>IELTS</span> preparation at home.
                  </h3>
                  <p>
                    Get prepared to ace the competitive exams. It’s just so
                    easy, you choose your path to score your destined one.
                  </p>

                  {/* Buttons for user actions */}
                  <div className="header-button-div">
                    <button>Start Free Pack</button>
                    <button className="header-video-btn" onClick={openModal}>
                      {/* Video icon button to open the modal */}
                      <img src={videoIcon} alt="videoIcon" />
                      <span> See how it's work</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right section: header image */}
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="header-picture-div">
                  <img src={headerPic} alt="header_picture" />
                </div>
              </div>
            </div>
          </section>

          {/* Modal to show the video */}
          {isModalOpen && (
            <div className="modal" onClick={closeModal}>
              {/* Prevents modal click from propagating and closing */}
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn" onClick={closeModal}>
                  ✖ {/* Close button for the modal */}
                </button>

                <iframe
                  src="https://www.youtube.com/embed/jhSg4UJf7J4?autoplay=1"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Counter section for statistics */}
        <div className="header-counter-div">
          <section className="header-counter-section">
            <div className="row header-counter-row">
              {/* Column for the first statistic */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-sx-12 mt-3 mb-3 p-4">
                <div className="header-counter-info-div">
                  <h2>60 +</h2>
                  <p>Packages available</p>
                </div>
              </div>

              {/* Column for the second statistic */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-sx-12 mt-3 mb-3 p-4 header-counter-middle-col">
                <div className="header-counter-info-div">
                  <h2>50 +</h2>
                  <p>Students Joined</p>
                </div>
              </div>

              {/* Column for the third statistic */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-sx-12 mt-3 mb-3 p-4">
                <div className="header-counter-info-div">
                  <h2>20 +</h2>
                  <p>Expert Facilitators</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Header;
