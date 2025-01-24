import React from "react"; // Importing React to use JSX syntax
import CreatePackage from "../Components/CreatePackage/CreatePackage"; // Importing the CreatePackage component from the specified path

const CreatePackagePage = () => {
  // The CreatePackagePage component is used to display the CreatePackage component
  return (
    <>
      <CreatePackage />{" "}
      {/* Rendering the CreatePackage component inside the CreatePackagePage component */}
    </>
  );
};

export default CreatePackagePage; // Exporting the CreatePackagePage component to be used elsewhere in the app
