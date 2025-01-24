import React from "react"; // Importing React to use JSX syntax
import Register from "../Components/Register/Register"; // Importing the Register component from the Register directory

const RegisterPage = () => {
  // The RegisterPage component is responsible for rendering the registration page
  return (
    <>
      <Register />{" "}
      {/* Rendering the Register component which handles the user registration process */}
    </>
  );
};

export default RegisterPage; // Exporting the RegisterPage component for use in routing or elsewhere in the app
