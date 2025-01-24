import React from "react";
import bookMark from "../../assets/blank-bookMark.png"; // Importing the bookmark image
import { useGetPopularPackagesQuery } from "../../Redux/Auth/authApi"; // Custom hook for fetching popular packages from the API
import Loading from "../../Hooks/Loading"; // Component for showing a loading spinner or animation
import { useDispatch } from "react-redux"; // Hook to interact with Redux store
import { addToCart } from "../../Redux/Auth/cartSlice"; // Action to add a product to the cart
import RatingStars from "../PopularCourse/RatingStars";

const Ielts = () => {
  const { data, isLoading } = useGetPopularPackagesQuery(); // Fetching popular IELTS packages from the Redux API slice
  const dispatch = useDispatch(); // Initialize dispatch to send actions to the Redux store

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatching the product to be added to the cart in Redux store
    alert(`Package successfully added`); // Show an alert after the product is added to the cart
  };

  // Show a loading spinner while data is being fetched
  if (isLoading)
    return (
      <div>
        <Loading /> {/* Loading component is displayed while data is loading */}
      </div>
    );

  return (
    <>
      <div>
        <section style={{ paddingBottom: "15rem" }}>
          <div className="my-package-div" style={{ marginTop: "6rem" }}>
            <h4>IELTS Packages</h4>{" "}
            {/* Title section displaying "IELTS Packages" */}
          </div>

          <div className="row">
            {/* Mapping through the fetched data and rendering individual product cards */}
            {data.getData?.map((product) => (
              <div
                className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-3 mb-3"
                key={product.id} // Unique key for each product card to help React optimize rendering
              >
                <div className="popular-course-card">
                  {/* Card image and bookmark */}
                  <div className="popular-course-card-image">
                    <img src={product.photo} alt="package_image" />{" "}
                    {/* Package image */}
                    <img src={bookMark} alt="book_mark_image" />{" "}
                    {/* Bookmark image */}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    {/* Review and rating section */}
                    <div className="d-flex justify-content-start align-items-center popular-course-review-div">
                      {/* Rating section */}
                      <p className="me-2">
                        <RatingStars rating={product.aveRatings} />
                      </p>
                      {/* Stars component for displaying rating */}
                      <p>5.00 ({product.ratingNumber})</p>{" "}
                      {/* Displaying product rating */}
                    </div>

                    {/* Duration of the package */}
                    <div className="popular-course-duration-div">
                      <p>
                        <i className="fa-regular fa-clock me-2"></i>
                        {product.validity} Days {/* Showing validity in days */}
                      </p>
                    </div>
                  </div>

                  {/* Package name */}
                  <div className="popular-course-card-title">
                    <h6>{product.packageName}</h6>{" "}
                    {/* Displaying package name */}
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
                      {/* Discounted price */}
                      <span>Tk.{product.price}</span> {/* Original price */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Ielts;
