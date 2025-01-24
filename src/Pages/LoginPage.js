import React from "react"; // Importing React to use JSX syntax
import Login from "../Components/Login/Login"; // Importing the Login component

const LoginPage = () => {
  // The LoginPage component is responsible for rendering the login page
  return (
    <>
      <Login />{" "}
      {/* Rendering the Login component which handles the login form */}
    </>
  );
};

export default LoginPage; // Exporting the LoginPage component to be used elsewhere in the app
