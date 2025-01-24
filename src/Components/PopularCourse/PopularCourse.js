import React from "react";
import "./PopularCourse.css"; // Importing the stylesheet for styling the component
import bookMark from "../../assets/blank-bookMark.png"; // Bookmark image used in the course card
import { useNavigate } from "react-router"; // Hook for navigating to different routes
import { useGetPopularPackagesQuery } from "../../Redux/Auth/authApi"; // Custom hook for fetching popular packages from the API
import Loading from "../../Hooks/Loading"; // Loading component to display while data is being fetched
import ReactStars from "react-rating-stars-component"; // ReactStars component to display ratings
import { useDispatch } from "react-redux"; // Hook to dispatch actions to the Redux store
import { addToCart } from "../../Redux/Auth/cartSlice"; // Action to add items to the cart
import RatingStars from "./RatingStars";

const PopularCourse = () => {
  const navigate = useNavigate(); // Initialize useNavigate for routing
  const { data, isLoading } = useGetPopularPackagesQuery(); // Fetch popular packages data and loading state
  const dispatch = useDispatch(); // Initialize dispatch for Redux actions

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the product to be added to the cart
    alert(`Package successfully added`); // Show an alert after adding to the cart
  };

  // If data is still loading, show the loading component
  if (isLoading)
    return (
      <div>
        <Loading /> {/* Show loading animation until data is fetched */}
      </div>
    );

  return (
    <>
      <div className="popular-course-div">
        <section className="popular-course-section">
          <div className="popular-course-title">
            <h3>Some popular courses</h3> {/* Title for the section */}
          </div>

          <div className="row">
            {/* Mapping through the fetched data to display each package */}
            {data.getData?.map((product) => (
              <div
                className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3"
                key={product.id} // Each product has a unique key (ID)
              >
                <div className="popular-course-card">
                  {/* Image section */}
                  <div className="popular-course-card-image">
                    <img src={product.photo} alt="package_image" />{" "}
                    {/* Displaying package image */}
                    <img src={bookMark} alt="book_mark_image" />{" "}
                    {/* Displaying bookmark image */}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-start align-items-center popular-course-review-div">
                      {/* Rating section */}
                      <p className="me-2">
                        <RatingStars rating={product.aveRatings} />
                      </p>
                      {/* Stars component for displaying rating */}
                      <p>5.00 ({product.ratingNumber})</p>{" "}
                      {/* Displaying product rating */}
                    </div>

                    <div className="popular-course-duration-div">
                      <p>
                        {" "}
                        <i className="fa-regular fa-clock me-2"></i>{" "}
                        {product.validity} Days{" "}
                        {/* Displaying validity of the package */}
                      </p>
                    </div>
                  </div>

                  {/* Package name */}
                  <div className="popular-course-card-title">
                    <h6>{product.packageName}</h6>{" "}
                    {/* Displaying the name of the package */}
                  </div>

                  {/* Writing and Reading sections */}
                  <div className="popular-course-writing-review-div d-flex align-items-center">
                    <p className="me-5">
                      <i className="fa-solid fa-pen-to-square me-2"></i>
                      {product.writingQ} Writing{" "}
                      {/* Displaying writing questions */}
                    </p>

                    <p>
                      <i className="fa-solid fa-book me-2"></i>
                      {product.readingQ} Reading{" "}
                      {/* Displaying reading questions */}
                    </p>
                  </div>

                  {/* Speaking and Listening sections */}
                  <div className="popular-course-writing-review-div d-flex align-items-center">
                    <p className="me-5">
                      <i className="fa-solid fa-microphone me-2"></i>
                      {product.speakingQ} Speaking{" "}
                      {/* Displaying speaking questions */}
                    </p>

                    <p>
                      <i className="fa-solid fa-headphones me-2"></i>
                      {product.listeningQ} Listening{" "}
                      {/* Displaying listening questions */}
                    </p>
                  </div>

                  {/* Price and cart button */}
                  <div className="d-flex flex-wrap justify-content-between align-items-center popular-course-price-cart-btn-div">
                    <button onClick={() => handleAddToCart(product)}>
                      Add to cart{" "}
                      {/* Button for adding the product to the cart */}
                    </button>
                    <p>
                      <span>Tk.{product.discount}</span>{" "}
                      {/* Displaying discounted price */}
                      <span>Tk.{product.price}</span>{" "}
                      {/* Displaying original price */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button to navigate to the "See All Packages" page */}
          <div className="popular-course-all-btn-div">
            <h6
              onClick={() => {
                navigate(`/packages/Ielts`); // Navigate to IELTS packages page
                window.scrollTo({
                  top: 0,
                  behavior: "smooth", // Smooth scroll to the top after navigating
                });
              }}
            >
              See All Pack <i className="fa-solid fa-arrow-right ms-2"></i>
            </h6>
          </div>
        </section>
      </div>
    </>
  );
};

export default PopularCourse;
