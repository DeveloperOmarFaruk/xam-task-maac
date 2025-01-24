import React, { useState } from "react"; // Importing React and useState for managing state.
import "../Login/Login.css"; // Importing the CSS file for styling (shared with login).
import shado from "../../assets/GroupX.png"; // Importing image for the left section of the registration screen.
import xamPicture from "../../assets/Group 97973.png"; // Importing another image for the left section.
import logo from "../../assets/logo.png"; // Importing the brand logo image.
import { useNavigate } from "react-router"; // Importing useNavigate hook for page navigation.
import { useRegisterMutation } from "../../Redux/Auth/authApi"; // Importing register mutation from the Redux API service.

const Register = () => {
  // Initializing state variables
  const navigate = useNavigate(); // Hook to navigate to different pages.
  const [formData, setFormData] = useState({
    fullName: "", // State for storing the full name input
    email: "", // State for storing the email input
    phoneNumber: "", // State for storing the phone number input
    password: "", // State for storing the password input
    confirmPassword: "", // State for storing the confirm password input
  });
  const [errors, setErrors] = useState({}); // State to store validation error messages.
  const [register] = useRegisterMutation(); // Hook to handle register mutation (API call).

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form data before submission
  const validate = () => {
    const newErrors = {}; // Initialize an object to store validation errors.
    if (!formData.fullName) newErrors.fullName = "Full name is required."; // Check if full name is provided.
    if (!formData.email)
      newErrors.email = "Email is required."; // Check if email is provided.
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      // Check if email format is valid.
      newErrors.email = "Email is invalid.";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone is required."; // Check if phone number is provided.
    if (!formData.password) newErrors.password = "Password is required."; // Check if password is provided.
    if (formData.password !== formData.confirmPassword)
      // Check if passwords match.
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors); // Update error state with validation errors.
    return Object.keys(newErrors).length === 0; // Return true if no errors are found.
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission.
    if (!validate()) return; // If validation fails, do not proceed.

    try {
      // Attempt to register the user via API call
      await register(formData).unwrap();
      alert("Registration successful!"); // Show success message if registration is successful.
      navigate(`/login`); // Navigate to the login page.
    } catch (err) {
      // Handle any errors during registration
      alert(err.data.message);
      console.log("Registration failed!", err); // Log error to the console.
    }
  };

  return (
    <>
      <div className="row w-100">
        {/* Left section with images */}
        <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 regis-col-height">
          <div className="image-section">
            <img
              src={shado}
              alt="shado_picture"
              className="account-main-left-part-shado" // Styling for the first image
            />
            <div>
              <img
                src={xamPicture}
                alt="xam_picture"
                className="account-main-left-part-xamPicture" // Styling for the second image
              />
            </div>
          </div>
        </div>

        {/* Right section containing the registration form */}
        <div className="col-xlg-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 regis-col-height">
          <div>
            <div className="brand-logo-div">
              {/* Brand logo that redirects to the home page */}
              <img src={logo} alt="brand_logo" onClick={() => navigate("/")} />
            </div>

            <div className="form-div">
              <div className="log-regis-btn-div">
                {/* Buttons for navigating to login or registration */}
                <button className="me-2" onClick={() => navigate("/login")}>
                  Log In
                </button>
                <button className="ative-blue-btn">Registration</button>
              </div>

              <div className="form-title">
                <h4>Registration</h4> {/* Title of the registration form */}
              </div>

              {/* Form for user input */}
              <form onSubmit={handleSubmit}>
                {/* Full name input */}
                <div className="mb-3 mt-4 input-auth-div">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    required
                    name="fullName"
                    onChange={handleChange}
                  />
                  {/* Error message for full name */}
                  {!formData.fullName && <span> {errors.fullName}</span>}
                </div>

                {/* Phone number input */}
                <div className="mb-3 mt-4 input-auth-div">
                  <input
                    type="number"
                    placeholder="Phone"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    required
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                  {/* Error message for phone number */}
                  {errors.phoneNumber && <span> {errors.phoneNumber}</span>}
                </div>

                {/* Email input */}
                <div className="mb-4 mt-4 input-auth-div">
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                  {/* Error message for email */}
                  {errors.email && <span> {errors.email}</span>}
                </div>

                {/* Password input */}
                <div className="mb-4 mt-4 input-auth-div">
                  <input
                    type="password"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={handleChange}
                  />
                  {/* Error message for password */}
                  {errors.password && <span> {errors.password}</span>}
                </div>

                {/* Confirm password input */}
                <div className="mb-4 mt-4 input-auth-div">
                  <input
                    type="password"
                    className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                    placeholder="Confirm Password"
                    required
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                  {/* Error message for confirm password */}
                  {errors.confirmPassword && (
                    <span> {errors.confirmPassword}</span>
                  )}
                </div>

                {/* Submit button for registration */}
                <div className="submit-btn">
                  <button type="submit">
                    Registration{" "}
                    <span className="ms-3">
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </button>
                </div>
              </form>

              {/* Link to navigate to login page */}
              <div className="alternative-btn">
                <p>
                  Already have an account?{" "}
                  <span onClick={() => navigate("/login")}>Sign In</span>
                </p>
              </div>

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

export default Register;
