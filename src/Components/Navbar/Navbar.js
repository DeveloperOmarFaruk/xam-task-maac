import React from "react";
import "./Navbar.css";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import cartBag from "../../assets/bag-2.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Auth/authSlice";
import { useGetProfileQuery } from "../../Redux/Auth/authApi";
import Loading from "../../Hooks/Loading";

const Navbar = () => {
  // Fetch user profile data using the API
  const { data, isLoading } = useGetProfileQuery();
  const user = data?.getData?.getProfile; // Extracting user profile from the data
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Accessing cart items from redux store

  // Logout handler function
  const handleLogout = () => {
    dispatch(logout()); // Dispatching logout action
    alert(`Logout Successful`); // Displaying logout success message
    window.location.reload(false); // Reloading the page to reflect the logout
  };

  // If data is still loading, show a loading component
  if (isLoading)
    return (
      <div>
        <Loading /> {/* Show Loading component */}
      </div>
    );

  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="logo">
            {/* Brand logo with smooth scrolling when clicked */}
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <img src={logo} alt="brand_logo" />
            </Link>
          </div>
          {/* Menu and close buttons for responsive design */}
          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul className="nav-links">
            <label for="close-btn" className="btn close-btn">
              <i className="fas fa-times"></i>{" "}
              {/* Close button for mobile menu */}
            </label>

            {/* Exam Packages Dropdown */}
            <li style={{ marginTop: "1.2rem" }}>
              <Link to="/" className="desktop-item">
                Exam Packages <i className="fa-solid fa-angle-down ms-2"></i>
              </Link>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" className="mobile-item">
                Dropdown Menu <i className="fa-solid fa-angle-down ms-2"></i>
              </label>
              <ul className="drop-menu">
                <li>
                  <Link
                    to="/packages/Ielts"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <i className="fa-solid fa-language me-2"></i> IELTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/upcoming"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <i className="fa-solid fa-graduation-cap me-2"></i> GRE
                  </Link>
                </li>
              </ul>
            </li>

            {/* Cart Item Count */}
            <li style={{ marginTop: "1.2rem" }}>
              <div className="nav-link-cart">
                <Link
                  to="/cart"
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  style={{
                    marginLeft: "1.5rem",
                    marginRight: "1.5rem",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    borderLeft: "1px solid #DBE9FD",
                    borderRadius: "0px",
                    borderRight: "1px solid #DBE9FD",
                  }}
                >
                  <img src={cartBag} alt="cart_bag" />
                  <span>{cartItems.length}</span>{" "}
                  {/* Display cart item count */}
                </Link>
              </div>
            </li>

            {/* User Login/Registration or User Profile Menu */}
            {!user ? (
              <>
                <li style={{ marginTop: "1.2rem" }}>
                  <Link to="/login">
                    <span className="nav-login">Login</span>
                  </Link>
                </li>

                <li style={{ marginTop: "1.2rem" }}>
                  <Link to="/registration">
                    <span className="nav-register">Registration</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* User profile dropdown menu */}
                <li style={{ marginTop: "1.2rem" }}>
                  <Link to="/" className="desktop-item">
                    {user.fullName}{" "}
                    <i className="fa-solid fa-angle-down ms-2"></i>
                  </Link>
                  <input type="checkbox" id="showDropName" />
                  <label for="showDropName" className="mobile-item">
                    {user.fullName}{" "}
                    <i className="fa-solid fa-angle-down ms-2"></i>
                  </label>
                  <ul className="drop-menu">
                    <li>
                      <Link
                        to="/my-package"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <i className="fa-solid fa-book me-2"></i> My Packages
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/create-package"
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                        }}
                      >
                        <i className="fa-solid fa-circle-plus me-2"></i> Create
                        Package
                      </Link>
                    </li>
                    <li>
                      <Link to="/" onClick={handleLogout}>
                        <i className="fa-solid fa-right-from-bracket me-2"></i>{" "}
                        Logout {/* Logout link */}
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </ul>
          {/* Menu toggle button for mobile */}
          <label
            for="menu-btn"
            className="btn menu-btn"
            style={{ color: "black" }}
          >
            <i className="fas fa-bars"></i> {/* Menu icon for mobile */}
          </label>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
