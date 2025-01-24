import React from "react"; // Importing React to use JSX syntax
import Ielts from "../Components/Packages/Ielts"; // Importing the Ielts component from the Packages directory

const PackagesPage = () => {
  // The PackagesPage component is responsible for rendering the IELTS package page
  return (
    <>
      <Ielts />{" "}
      {/* Rendering the Ielts component which likely displays IELTS package details */}
    </>
  );
};

export default PackagesPage; // Exporting the PackagesPage component to be used in routing or elsewhere in the app
