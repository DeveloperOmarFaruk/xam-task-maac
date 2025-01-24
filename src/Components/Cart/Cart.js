import React, { useState } from "react";
import "./Cart.css";
import EmptyCartImg from "../../assets/emptyCart.svg";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  applyCoupon,
  clearCart,
  removeFromCart,
} from "../../Redux/Auth/cartSlice";
import { useGetProfileQuery } from "../../Redux/Auth/authApi";

const Cart = () => {
  // State to handle coupon input, error, and success messages
  const [couponInput, setCouponInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch(); // Redux dispatcher
  const navigate = useNavigate(); // Navigation hook

  // Extracting cart-related data from Redux store
  const { items, totalPrice, totalVAT, discount, coupon } = useSelector(
    (state) => state.cart
  );

  // Fetching user profile data using a custom hook
  const { data } = useGetProfileQuery();
  const user = data?.getData?.getProfile;

  // Handler to remove an item from the cart
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  // Handler to apply a discount coupon
  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponInput === "Xampro100") {
      dispatch(applyCoupon(couponInput));
      setSuccess("Discount coupon applied successfully");
      setCouponInput("");
    } else {
      setError("Invalid Coupon Code");
    }
  };

  // Handler to clear the cart and proceed to checkout
  const handleCheckout = () => {
    if (user) {
      dispatch(clearCart());
      alert("Purchase Successful!");
    } else {
      navigate("/login");
    }
  };

  // Handler to mark terms and conditions checkbox as checked
  const handleCheckButtonClick = () => {
    setIsChecked(true);
  };

  // Handler to show an alert if terms and conditions are not agreed upon
  const handleAlert = () => {
    alert(`Please agree all terms and conditions`);
  };

  // Calculating grand total and final total after discounts and VAT
  const grandTotal = totalPrice + totalVAT;
  const finalTotal = totalPrice + totalVAT - discount;

  return (
    <>
      <section className="section" style={{ paddingBottom: "7rem" }}>
        <div className="cart-title">
          <h3>Cart</h3>
        </div>

        <div className="cart-info-div">
          <div className="row">
            {items.length === 0 ? (
              // Display when the cart is empty
              <>
                <div className="text-center pt-5 pb-5">
                  <img src={EmptyCartImg} alt="empty_cart_image" />

                  <h4
                    style={{
                      margin: "2rem auto 1rem auto",
                      fontWeight: "700",
                      fontSize: "25px",
                    }}
                  >
                    Your cart is empty.
                  </h4>
                  <p
                    style={{
                      margin: "0rem auto 2rem auto",
                      fontWeight: "400",
                      fontSize: "14px",
                    }}
                  >
                    Please browse from the available resources , and shop for
                    your brains
                  </p>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      navigate("/packages/Ielts");
                    }}
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            ) : (
              // Display when the cart has items
              <>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4">
                  {items.map((item) => (
                    <div
                      className="cart-package-info-div d-flex mb-3"
                      key={item.id}
                    >
                      <div className="row align-items-center flex-nowrap ">
                        <div className="col-3 cart-package-image">
                          <img src={item.photo} alt="cart_product_image" />
                        </div>

                        <div className="col-9 cart-package-details">
                          <h5>{item.packageName}</h5>
                          <p>
                            {" "}
                            <i className="fa-regular fa-clock"></i> Duration:{" "}
                            {item.validity} days
                          </p>
                          <h6>Tk.{item.price}</h6>
                        </div>
                      </div>

                      <div className="cart-package-cross">
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => handleRemove(item.id)}
                        ></i>
                      </div>
                    </div>
                  ))}

                  <div className="mt-3" style={{ fontSize: "14px" }}>
                    <Link
                      to="/"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mb-4">
                  <div className="cart-payment-div">
                    <div className="d-flex justify-content-between align-items-center cart-product-price">
                      <p>Price</p>
                      <p>Tk. {totalPrice.toFixed(2)}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center cart-product-price">
                      <p>Discount</p>
                      <p>- Tk. {totalPrice === 0 ? 0 : discount.toFixed(2)}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center cart-product-price">
                      <p>Vat</p>
                      <p>Tk. {totalVAT.toFixed(2)}</p>
                    </div>

                    <div className="d-flex justify-content-between align-items-center cart-product-total-price">
                      <h4>Grand Total</h4>
                      <h4>Tk. {grandTotal.toFixed(2)}</h4>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <p className="mt-2">Apply Coupon</p>

                      <form onSubmit={handleApplyCoupon}>
                        <div className="d-flex align-items-center">
                          <input
                            type="text"
                            className="p-2 w-100 rounded-2 border border-1 text-black bg-white fw-normal"
                            value={couponInput}
                            onChange={(e) => setCouponInput(e.target.value)}
                            placeholder="Enter Coupon Code"
                          />
                          <button
                            type="submit"
                            className="cart-cuppon-apply-btn"
                          >
                            Apply
                          </button>
                        </div>

                        {success || error ? (
                          <>
                            {success ? (
                              <p
                                style={{
                                  color: "green",
                                  fontSize: "13px",
                                  textAlign: "start",
                                }}
                              >
                                {success}
                              </p>
                            ) : (
                              <p
                                style={{
                                  color: "red",
                                  fontSize: "13px",
                                  textAlign: "start",
                                }}
                              >
                                {error}
                              </p>
                            )}
                          </>
                        ) : (
                          <p></p>
                        )}
                      </form>
                    </div>

                    <div className="d-flex justify-content-between align-items-center cart-product-total-price">
                      <h4>Total</h4>
                      <h4>
                        Tk. {totalPrice === 0 ? 0 : finalTotal.toFixed(2)}
                      </h4>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                          onClick={handleCheckButtonClick}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                          style={{
                            color: "#74788D",
                            fontSize: "14px",
                            fontWeight: "400",
                          }}
                        >
                          I agree all terms and conditions
                        </label>
                      </div>

                      <div className="cart-payment-btn">
                        {isChecked ? (
                          <button onClick={handleCheckout}>Payment</button>
                        ) : (
                          <button onClick={handleAlert}>Payment</button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
