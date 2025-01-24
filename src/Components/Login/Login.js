import React, { useState } from "react"; // Importing React and useState for managing state.
import "./Login.css"; // Importing the CSS file for styling.
import shado from "../../assets/GroupX.png"; // Importing the image for the left side of the login screen.
import xamPicture from "../../assets/Group 97973.png"; // Importing another image for the left side of the login screen.
import logo from "../../assets/logo.png"; // Importing the brand logo.
import { useLocation, useNavigate } from "react-router"; // Importing hooks for navigation and location.
import { useLoginMutation } from "../../Redux/Auth/authApi"; // Importing login mutation from Redux API service.
import { useDispatch } from "react-redux"; // Importing useDispatch hook from Redux to dispatch actions.
import { setCredentials } from "../../Redux/Auth/authSlice"; // Importing the action to set credentials in Redux store.

const Login = () => {
  // State variables for handling form data and user interaction
  const navigate = useNavigate(); // Hook to navigate between pages.
  const [formData, setFormData] = useState({ email: "", password: "" }); // State to store form data (email and password).
  const [login] = useLoginMutation(); // Hook to handle login mutation.
  const dispatch = useDispatch(); // Hook to dispatch actions to Redux store.
  const location = useLocation(); // Hook to get the current location (used for redirect after login).

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission (login)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior.

    try {
      // Perform login via API call
      const data = await login(formData).unwrap();
      dispatch(setCredentials({ user: data.user, token: data.token })); // Set user data and token in Redux store.
      alert("Login successful"); // Display success alert.
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // Navigate to the original page the user wanted to visit or home page
      const redirectPath = location.state?.from || "/";
      navigate(redirectPath, { replace: true });
    } catch (err) {
      // Handle any errors during login
      alert(err.data.message);
      console.log("Login failed!", err.data.message);
    }
  };

  return (
    <>
      <div className="row w-100">
        {/* Left section containing images */}
        <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 log-col-height">
          <div className="image-section">
            <img
              src={shado}
              alt="shado_picture"
              className="account-main-left-part-shado" // Applying specific CSS class for styling
            />
            <div>
              <img
                src={xamPicture}
                alt="xam_picture"
                className="account-main-left-part-xamPicture" // Styling for another image on the left
              />
            </div>
          </div>
        </div>

        {/* Right section containing the form */}
        <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 log-col-height">
          <div>
            <div className="brand-logo-div">
              {/* Brand logo that redirects to the home page */}
              <img src={logo} alt="brand_logo" onClick={() => navigate("/")} />
            </div>

            <div className="form-div">
              <div className="log-regis-btn-div">
                {/* Buttons for navigating to login or registration */}
                <button className="me-2 ative-blue-btn">Log In</button>
                <button onClick={() => navigate("/registration")}>
                  Registration
                </button>
              </div>

              <div className="form-title">
                <h4>Log In</h4> {/* Form title */}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="mb-3 mt-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                {/* Password input */}
                <div className="">
                  <input
                    type="password"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={handleChange}
                  />
                </div>

                {/* Forgot password link */}
                <div className="mt-3 forgot-password">
                  <p>Forgot password?</p>
                </div>

                {/* Submit button for login */}
                <div className="submit-btn">
                  <button type="submit">
                    Log In{" "}
                    <span className="ms-3">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </form>

              {/* Link to navigate to registration page */}
              <div className="alternative-btn">
                <p>
                  Need to create an account?{" "}
                  <span onClick={() => navigate("/registration")}>Sign Up</span>
                </p>
              </div>

              {/* Option to login via social media */}
              <div className="text-center">
                <p>Or</p>
              </div>

              {/* Social login buttons */}
              <div className="social-btn">
                <button className="me-5">
                  <span>
                    <i className="fa-brands fa-google"></i> {/* Google icon */}
                  </span>
                  Google
                </button>
                <button style={{ color: "#0052cc" }}>
                  <span>
                    <i className="fa-brands fa-facebook"></i>{" "}
                    {/* Facebook icon */}
                  </span>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
