import React from "react"; // Importing React to create the component.
import "./HomeFooter.css"; // Importing the CSS file for styling the footer.
import whiteLogo from "../../assets/whiteLogo.png"; // Importing the white logo for branding.
import companyLogo from "../../assets/footerCompanyLogo.png"; // Importing the company logo for display.
import payImage from "../../assets/payment.png"; // Importing an image for payment methods section.

const HomeFooter = () => {
  return (
    <>
      <div className="home-footer-div">
        {/* Main wrapper div for the footer section */}
        <section className="home-footer-section">
          <div className="row">
            {/* First column: Brand section */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3">
              <div className="home-footer-brand-div">
                <img src={whiteLogo} alt="brand_white_logo" />{" "}
                {/* Displaying the white brand logo */}
                <p>
                  Need a solution for mockup exams? Or perhaps exam supervision?
                  XamPro is the answer.
                </p>
              </div>
            </div>

            {/* Second column: Contact/Address section */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3">
              <div className="home-footer-address-div">
                <h5>Get in touch</h5> {/* Heading for the contact section */}
                <p>
                  <i className="fa-solid fa-location-dot me-2"></i>{" "}
                  {/* Font Awesome icon for location */}
                  <span>
                    Registered Address: Ta-143/A, Moddho Badda (3rd Floor),
                    Gulshan, Badda, Dhaka - 1212
                  </span>
                </p>
                <p>
                  <i className="fa-solid fa-location-dot me-2"></i>{" "}
                  {/* Another location icon */}
                  House 15, Road 24, Gulshan - 2 Dhaka - 1212
                </p>
                <p>
                  <i className="fa-regular fa-envelope me-2"></i>{" "}
                  {/* Font Awesome icon for email */}
                  solutionsmaac@gmail.com
                </p>
              </div>
            </div>

            {/* Third column: Company logo and insights */}
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3">
              <div className="home-footer-company-div">
                <h5>Want some insights?</h5> {/* Heading for company section */}
                <img src={companyLogo} alt="company_logo" />{" "}
                {/* Displaying the company logo */}
              </div>
            </div>
          </div>

          {/* Payment methods section */}
          <div className="home-footer-payment">
            <img src={payImage} alt="payment_image" />{" "}
            {/* Displaying payment methods image */}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeFooter; // Exporting the HomeFooter component to be used elsewhere.
