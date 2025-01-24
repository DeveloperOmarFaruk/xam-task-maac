import React from "react"; // Importing React to use JSX syntax
import Cart from "../Components/Cart/Cart"; // Importing the Cart component from the specified path

const CartPage = () => {
  // The CartPage component serves as a wrapper for the Cart component
  return (
    <>
      <Cart />{" "}
      {/* Rendering the Cart component inside the CartPage component */}
    </>
  );
};

export default CartPage; // Exporting the CartPage component to be used elsewhere in the app
