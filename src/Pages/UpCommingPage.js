import React from "react"; // Importing React to use JSX syntax
import Gre from "../Components/Packages/Gre"; // Importing the Gre component from the Packages directory

const UpCommingPage = () => {
  // The UpCommingPage component is responsible for rendering the upcoming page for GRE-related content
  return (
    <>
      <Gre />{" "}
      {/* Rendering the Gre component which contains information about upcoming GRE-related packages or updates */}
    </>
  );
};

export default UpCommingPage; // Exporting the UpCommingPage component so it can be used in routing or elsewhere in the app
