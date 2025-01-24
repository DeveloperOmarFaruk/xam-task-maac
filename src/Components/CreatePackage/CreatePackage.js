import React, { useEffect, useState } from "react";
import "./CreatePackage.css";
import Menu from "../../assets/menu.png";
import Speaking from "../../assets/speaking.png";
import Reading from "../../assets/reading.png";
import Listening from "../../assets/listening.png";
import Writing from "../../assets/writing.png";
import XamBanner from "../../assets/xamBanner.png";
import Empty from "../../assets/empty.png";
import {
  useGetAllServicesQuery,
  useGetCoursesTypeQuery,
} from "../../Redux/Auth/authApi";
import { useDispatch } from "react-redux";
import DummyIm from "../../assets/cartImage.png";
import { addToCart } from "../../Redux/Auth/cartSlice";
import { useNavigate } from "react-router";

// Main component for creating a package
const CreatePackage = () => {
  const { data: servicesData } = useGetAllServicesQuery(); // Fetch all available services
  const { data: coursesData } = useGetCoursesTypeQuery(); // Fetch all course types
  const courseDataType = coursesData?.getData; // Extract course data
  const courseType = courseDataType?.[0].courseType; // Get the course type array

  const [droppedItems, setDroppedItems] = useState([]); // Items dropped into "Your Service" section
  const [itemsData, setItemsData] = useState([]); // All available services
  const [totalPrice, setTotalPrice] = useState(0); // Total price of dropped items
  const dispatch = useDispatch(); // Redux dispatch function
  const navigate = useNavigate(); // Navigation hook
  const [packageName, setPackageName] = useState(""); // Name of the package
  const [packageCourseType, setPackageCourseType] = useState(""); // Selected course type for the package

  // Populate itemsData with fetched servicesData
  useEffect(() => {
    if (servicesData?.getDatas) {
      setItemsData(servicesData.getDatas);
    }
  }, [servicesData]);

  // Handle the start of dragging a service item
  const handleDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item)); // Attach item data to the drag event
  };

  // Remove the dragged item from the available services list
  const handleDropItem = (droppedItem) => {
    setItemsData((prevItems) =>
      prevItems.filter((item) => item._id !== droppedItem._id)
    );
  };

  // Handle drop event in the "Your Service" section
  const handleDrop = (e) => {
    e.preventDefault();
    const item = JSON.parse(e.dataTransfer.getData("item")); // Retrieve dropped item data
    setDroppedItems((prev) => [...prev, { ...item, quantity: 1 }]); // Add the item with a default quantity of 1
    setTotalPrice((prev) => prev + item.price); // Update the total price
    handleDropItem(item); // Remove the item from available services
  };

  // Allow dragging over the "Your Service" section
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // Handle quantity change for dropped items
  const handleQuantityChange = (id, quantity) => {
    console.log(id, quantity); // Log the changed quantity for debugging
    setDroppedItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );

    // Calculate the updated total price
    const newTotal = droppedItems.reduce((sum, item) => {
      const newQuantity = item._id === id ? parseInt(quantity) : item.quantity;
      return sum + item.price * newQuantity;
    }, 0);
    setTotalPrice(newTotal);
  };

  // Handle form submission to add the package to the cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    const generateUniqueId = () => {
      return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`; // Generate unique package ID
    };
    const product = {
      id: generateUniqueId(),
      packageName: packageName,
      price: totalPrice,
      validity: 90, // Default validity period
      photo: DummyIm, // Placeholder image for the package
      packageCourseType: packageCourseType,
    };
    dispatch(addToCart(product)); // Add package to Redux cart
    navigate(`/cart`); // Navigate to the cart page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    }); // Scroll to the top of the page
    alert(`Create package successfully added`); // Alert the user
  };

  return (
    <>
      <section className="section" style={{ paddingBottom: "3rem" }}>
        <div className="cart-title d-flex justify-content-between align-items-center align-self-center">
          <h3>Create Package</h3>
          <button>Draft package</button>
        </div>

        <form onSubmit={handleAddToCart}>
          {/* Input fields for package name and course type */}
          <div className="create-package-name-type-div">
            <div className="row">
              {/* Package Name Input */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2 mb-2 create-package-name-type-col">
                <label>Package name</label>
                <br />
                <input
                  type="text"
                  className="form-control w-100"
                  placeholder="Enter package name"
                  required
                  onChange={(e) => setPackageName(e.target.value)}
                />
              </div>

              {/* Course Type Dropdown */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-2 mb-2 create-package-name-type-col">
                <label>Course type</label>
                <br />
                <select
                  className="form-select w-100"
                  required
                  onChange={(e) => setPackageCourseType(e.target.value)}
                >
                  <option selected>Select Course</option>
                  {courseType?.map((item) => (
                    <option value={item.courseTypeName} key={item._id}>
                      {item.courseTypeName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Service lists */}
          <div className="row" style={{ marginTop: "2rem" }}>
            {/* List of available services */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 mb-3">
              <div className="create-package-list-service-div">
                <h4>List of the service</h4>
                <div className="create-package-fixed-height-div-left">
                  {itemsData?.map((item) => (
                    <div
                      className="d-flex justify-content-between align-items-center align-self-center create-package-drag-btn"
                      key={item._id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item)}
                    >
                      <div className="d-flex align-items-center align-self-center">
                        <img src={Menu} alt="menu_picture" />
                        {item.serviceName === "reading" && (
                          <img src={Reading} alt="reading_picture" />
                        )}
                        {item.serviceName === "Listening" && (
                          <img src={Listening} alt="listening_picture" />
                        )}
                        {item.serviceName === "Writing" && (
                          <img src={Writing} alt="writing_picture" />
                        )}
                        {item.serviceName === "Speaking" && (
                          <img src={Speaking} alt="speaking_picture" />
                        )}
                        <p>{item.serviceName}</p>
                      </div>
                      <div className="d-flex align-items-center align-self-center">
                        <p className="ms-2">{item.price}Tk</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="create-package-drag-image">
                  <img src={XamBanner} alt="xam_banner" />
                </div>
              </div>
            </div>

            {/* Dropped items in "Your Service" */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-3 mb-3">
              <div className="create-package-list-service-div">
                <h4>Your Service</h4>
                <div
                  className="create-package-fixed-height-div-right"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  {droppedItems.length === 0 ? (
                    <div className="create-package-empty-pic">
                      <img src={Empty} alt="empty_picture" />
                    </div>
                  ) : (
                    droppedItems.map((item, index) => (
                      <div
                        className="d-flex justify-content-between align-items-center align-self-center create-package-drag-btn"
                        key={item._id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                      >
                        <div className="d-flex align-items-center align-self-center">
                          <img src={Menu} alt="menu_picture" />
                          {item.serviceName === "reading" && (
                            <img src={Reading} alt="reading_picture" />
                          )}
                          {item.serviceName === "Listening" && (
                            <img src={Listening} alt="listening_picture" />
                          )}
                          {item.serviceName === "Writing" && (
                            <img src={Writing} alt="writing_picture" />
                          )}
                          {item.serviceName === "Speaking" && (
                            <img src={Speaking} alt="speaking_picture" />
                          )}
                          <p>{item.serviceName}</p>
                        </div>
                        <div className="d-flex align-items-center align-self-center">
                          <select
                            className="form-select"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(item._id, e.target.value)
                            }
                          >
                            {/* Dropdown for quantity selection */}
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                          </select>
                          <p className="ms-2">{item.price}Tk</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Display total price */}
                <div className="d-flex justify-content-between align-items-center create-package-total-price">
                  <h4>Total Price</h4>
                  <h4>{totalPrice.toFixed(2)}Tk</h4>
                </div>

                {/* Save draft and create package buttons */}
                <div className="d-flex justify-content-between align-items-center create-package-save-create-btn">
                  <button>Save Draft</button>
                  <button type="submit">Create Package</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreatePackage;
