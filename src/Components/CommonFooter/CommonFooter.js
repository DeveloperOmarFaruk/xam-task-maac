import React from "react"; // Importing React to create the component
import "./CommonFooter.css"; // Importing the CSS file for styling the footer
import { Link } from "react-router"; // Importing Link component for navigation

// Defining the CommonFooter functional component
const CommonFooter = () => {
  return (
    <>
      {/* Wrapper for the entire footer */}
      <div className="common-footer-div">
        {/* A flexbox container for organizing footer elements */}
        <div className="d-flex flex-wrap justify-content-between align-items-center common-footer-section">
          {/* Section for the copyright text */}
          <div className="common-fotter-copy-right">
            <p>
              {/* Font Awesome icon for copyright */}
              <i className="fa-regular fa-copyright me-1"></i> 2020 MAAC all
              rights reserved
            </p>
          </div>

          {/* Section for navigation links */}
          <div className="common-fotter-pages-link">
            {/* Using Link component for navigation */}
            <Link to="/">Terms & Condition</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Refund Policy</Link>
            <Link to="/">FAQ</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonFooter;
