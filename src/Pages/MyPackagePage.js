import React from "react"; // Importing React to use JSX syntax
import MyPackage from "../Components/MyPackage/MyPackage"; // Importing the MyPackage component

const MyPackagePage = () => {
  // The MyPackagePage component is responsible for rendering the user's package page
  return (
    <>
      <MyPackage />{" "}
      {/* Rendering the MyPackage component which likely shows the user's package details */}
    </>
  );
};

export default MyPackagePage; // Exporting the MyPackagePage component to be used in routing or elsewhere in the app
