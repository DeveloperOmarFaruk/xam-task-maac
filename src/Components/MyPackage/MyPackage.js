import React from "react";
import "./MyPackage.css"; // Importing the stylesheet for the component
import packageImg from "../../assets/package-img.jpg"; // Importing image for the package
import blankBookMark from "../../assets/blank-bookMark.png"; // Importing bookmark image

const MyPackage = () => {
  return (
    <>
      <section style={{ paddingBottom: "15rem" }}>
        {/* Section for "My Package" with custom bottom padding */}
        <div
          className="d-flex justify-content-between align-items-center my-package-div"
          style={{ marginTop: "6rem" }}
        >
          {/* Header section with title and dropdown for filtering active courses */}
          <h4>My Package</h4>
          <div className="dropdown">
            {/* Dropdown button for course status selection */}
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: "white", color: "#0052cc" }}
            >
              Active Course
            </button>
            {/* Dropdown items for selecting course status */}
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button">
                  Completed
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  In Progress
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  Not Started
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row" style={{ marginTop: "3rem" }}>
          {/* The row to display the packages as cards */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xsm-12 mb-4">
            {/* Package card container */}
            <div className="my-package-card">
              {/* Card content */}
              <div className="my-package-card-img-div">
                {/* Image section for the package */}
                <img
                  src={packageImg}
                  alt="my_package_img"
                  className="my-package-image"
                />
                {/* Bookmark image section */}
                <img
                  src={blankBookMark}
                  alt="book_mark"
                  className="my-package-book-mark"
                />
                <div className="my-package-time-counter">
                  {/* Time counter for package duration */}
                  <p>
                    30D <span>:</span> 24H <span>:</span> 58H <span>:</span> 56S
                  </p>
                </div>
              </div>

              <div className="my-package-card-info-div">
                {/* Card info section */}
                <div className="my-package-rating-div d-flex justify-content-start align-items-center">
                  {/* Rating section with stars */}
                  <p>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-2"></i>
                  </p>
                  <p>5.00 (3)</p>
                </div>

                <div className="my-package-title-div">
                  {/* Package title */}
                  <h5>Speaking Vol 1</h5>
                </div>

                <div className="d-flex justify-content-start align-items-center my-package-duration-time-div">
                  {/* Duration info for the package */}
                  <p>
                    <i className="fa-regular fa-clock me-2"></i>
                  </p>
                  <p>Duration - 30 Days</p>
                </div>

                <div className="my-package-start-btn">
                  {/* Button to start the exam */}
                  <button>Start your exam</button>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for more package cards */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xsm-12 mb-4">
            <div className="my-package-card">
              {/* Card content as the previous one */}
              <div className="my-package-card-img-div">
                <img
                  src={packageImg}
                  alt="my_package_img"
                  className="my-package-image"
                />
                <img
                  src={blankBookMark}
                  alt="book_mark"
                  className="my-package-book-mark"
                />
                <div className="my-package-time-counter">
                  <p>
                    30D <span>:</span> 24H <span>:</span> 58H <span>:</span> 56S
                  </p>
                </div>
              </div>

              <div className="my-package-card-info-div">
                <div className="my-package-rating-div d-flex justify-content-start align-items-center">
                  <p>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-2"></i>
                  </p>
                  <p>5.00 (3)</p>
                </div>

                <div className="my-package-title-div">
                  <h5>Speaking Vol 1</h5>
                </div>

                <div className="d-flex justify-content-start align-items-center my-package-duration-time-div">
                  <p>
                    <i className="fa-regular fa-clock me-2"></i>
                  </p>
                  <p>Duration - 30 Days</p>
                </div>

                <div className="my-package-start-btn">
                  <button>Start your exam</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xsm-12 mb-4">
            <div className="my-package-card">
              {/* Card content repeated for another package */}
              <div className="my-package-card-img-div">
                <img
                  src={packageImg}
                  alt="my_package_img"
                  className="my-package-image"
                />
                <img
                  src={blankBookMark}
                  alt="book_mark"
                  className="my-package-book-mark"
                />
                <div className="my-package-time-counter">
                  <p>
                    30D <span>:</span> 24H <span>:</span> 58H <span>:</span> 56S
                  </p>
                </div>
              </div>

              <div className="my-package-card-info-div">
                <div className="my-package-rating-div d-flex justify-content-start align-items-center">
                  <p>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-2"></i>
                  </p>
                  <p>5.00 (3)</p>
                </div>

                <div className="my-package-title-div">
                  <h5>Speaking Vol 1</h5>
                </div>

                <div className="d-flex justify-content-start align-items-center my-package-duration-time-div">
                  <p>
                    <i className="fa-regular fa-clock me-2"></i>
                  </p>
                  <p>Duration - 30 Days</p>
                </div>

                <div className="my-package-start-btn">
                  <button>Start your exam</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPackage;
