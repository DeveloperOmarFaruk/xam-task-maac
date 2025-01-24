import React from "react";
import ErrorPic from "../../assets/error.svg"; // Importing the error image to display on the error page.
import { useNavigate } from "react-router"; // Importing `useNavigate` hook for programmatic navigation.

const Error = () => {
  const navigate = useNavigate(); // Initializing `useNavigate` hook to navigate to other routes.

  return (
    <>
      <div>
        <section>
          {/* Central container for error content, aligned to the center */}
          <div className="text-center">
            {/* Displaying an error image */}
            <img src={ErrorPic} alt="error_picture" className="w-75" />

            {/* Heading with a message indicating an error */}
            <h5
              style={{
                margin: "2rem auto 1rem auto", // Adding spacing around the heading.
                fontWeight: "700", // Bold font for emphasis.
                fontSize: "25px", // Larger font size for visibility.
              }}
            >
              Oops!
            </h5>

            {/* Subheading with additional context about the error */}
            <p
              style={{
                margin: "0rem auto 2rem auto", // Margin around the paragraph for spacing.
                fontWeight: "400", // Normal font weight for a subtle look.
                fontSize: "14px", // Small font size for secondary information.
              }}
            >
              We can't seem to find the page you are looking for.
            </p>

            {/* Button to navigate back to the home page */}
            <button
              type="button"
              className="btn btn-primary" // Bootstrap class for a styled button.
              onClick={() => {
                navigate("/"); // Navigating to the home page.
                window.scrollTo({
                  top: 0, // Scroll to the top of the page.
                  behavior: "smooth", // Smooth scrolling for better user experience.
                });
              }}
            >
              Back to home
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Error;
