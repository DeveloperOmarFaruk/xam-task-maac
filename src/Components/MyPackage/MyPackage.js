import React from "react";
import "./MyPackage.css"; // Importing the stylesheet for the component
import packageImg from "../../assets/package-img.jpg"; // Importing image for the package
import blankBookMark from "../../assets/blank-bookMark.png"; // Importing bookmark image

const MyPackage = () => {
  // Array to store package data
  const packages = [
    {
      id: 1,
      image: packageImg,
      bookmark: blankBookMark,
      timeCounter: "30D : 24H : 58M : 56S",
      rating: "5.00 (3)",
      title: "Speaking Vol 1",
      duration: "30 Days",
    },
    {
      id: 2,
      image: packageImg,
      bookmark: blankBookMark,
      timeCounter: "30D : 24H : 58M : 56S",
      rating: "5.00 (3)",
      title: "Speaking Vol 2",
      duration: "30 Days",
    },
    {
      id: 3,
      image: packageImg,
      bookmark: blankBookMark,
      timeCounter: "30D : 24H : 58M : 56S",
      rating: "5.00 (3)",
      title: "Speaking Vol 3",
      duration: "30 Days",
    },
  ];

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
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xsm-12 mb-4"
            >
              <div className="my-package-card">
                {/* Package card container */}
                <div className="my-package-card-img-div">
                  {/* Image section for the package */}
                  <img
                    src={pkg.image}
                    alt="my_package_img"
                    className="my-package-image"
                  />
                  {/* Bookmark image */}
                  <img
                    src={pkg.bookmark}
                    alt="book_mark"
                    className="my-package-book-mark"
                  />
                  <div className="my-package-time-counter">
                    {/* Time counter for package duration */}
                    <p>{pkg.timeCounter}</p>
                  </div>
                </div>

                <div className="my-package-card-info-div">
                  {/* Card info section */}
                  <div className="my-package-rating-div d-flex justify-content-start align-items-center">
                    <p>
                      <i className="fa-solid fa-star me-1"></i>
                      <i className="fa-solid fa-star me-1"></i>
                      <i className="fa-solid fa-star me-1"></i>
                      <i className="fa-solid fa-star me-1"></i>
                      <i className="fa-solid fa-star me-2"></i>
                    </p>
                    <p>{pkg.rating}</p>
                  </div>

                  <div className="my-package-title-div">
                    <h5>{pkg.title}</h5>
                  </div>

                  <div className="d-flex justify-content-start align-items-center my-package-duration-time-div">
                    <p>
                      <i className="fa-regular fa-clock me-2"></i>
                    </p>
                    <p>Duration - {pkg.duration}</p>
                  </div>

                  <div className="my-package-start-btn">
                    <button>Start your exam</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MyPackage;
