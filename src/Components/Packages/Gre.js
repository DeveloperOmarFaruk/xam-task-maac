import React from "react";
import upCommingImg from "../../assets/upComming.png"; // Importing an image for the upcoming section

const Gre = () => {
  return (
    <>
      <div>
        <section>
          <div className="row d-flex align-items-center">
            {/* Left Section: Image */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 mb-4 text-center">
              <img
                src={upCommingImg} // Displaying the image for upcoming section
                alt="upcomming_picture" // Alt text for accessibility
                className="w-75 " // Setting the image width to 75% of its container
              />
            </div>

            {/* Right Section: Email subscription for notifications */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 mb-4">
              <div>
                {/* Paragraph explaining the purpose of email subscription */}
                <p
                  style={{
                    margin: "0rem auto 2rem auto", // Styling the paragraph with auto margins
                    fontWeight: "400", // Setting font weight to normal
                    fontSize: "14px", // Setting font size
                  }}
                >
                  Currently in progress, however, if you would like to hear from
                  us regarding any upcoming news, events and changes, please
                  share your email address.
                </p>

                {/* Email input form */}
                <div className="form-floating mb-3">
                  <input
                    type="email" // Email input type for proper validation
                    className="form-control" // Applying Bootstrap styling to the input field
                    id="floatingInput" // Unique ID for the input field
                    placeholder="name@example.com" // Placeholder text
                  />
                  <label for="floatingInput">Type your email address</label>{" "}
                  {/* Label for the input field */}
                </div>

                {/* Notify me button */}
                <button type="button" className="btn btn-primary mt-2">
                  <i className="fa-regular fa-bell me-2"></i> Notify me{" "}
                  {/* Button icon and text */}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gre;
