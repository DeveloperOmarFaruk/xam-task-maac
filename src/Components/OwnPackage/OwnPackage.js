import React from "react";
import "./OwnPackage.css"; // Importing the CSS for styling
import ownImage from "../../assets/ownPackage.png"; // Importing an image to be displayed
import { useNavigate } from "react-router"; // Importing useNavigate hook for routing

const OwnPackage = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <>
      <div className="own-package-div">
        <section className="own-package-section">
          <div className="row d-flex flex-wrap align-items-center">
            {/* Left section with text information about creating a custom package */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 mb-4 order-2 order-md-1 order-sm-1 order-xs-1 ">
              <div className="own-package-info-div">
                <h4>
                  Create your own <br />
                  package
                </h4>
                {/* Paragraph explaining the purpose of the page */}
                <p>
                  If you wish to purchase a combo package,
                  <br /> you can choose your own selections from this
                  <br /> page and purchase it.
                </p>

                {/* Button that navigates to the 'create-package' page */}
                <button
                  onClick={() => {
                    navigate(`/create-package`); // Navigating to the create-package route
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth", // Smooth scroll to the top of the page
                    });
                  }}
                >
                  Create Package
                </button>
              </div>
            </div>

            {/* Right section with an image illustrating the concept of creating a custom package */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4 mt-4 order-1 order-md-2 order-sm-2 order-xs-2">
              <div className="own-pcakage-image-div">
                <img src={ownImage} alt="own_package_picture" />{" "}
                {/* Displaying the image */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OwnPackage;
