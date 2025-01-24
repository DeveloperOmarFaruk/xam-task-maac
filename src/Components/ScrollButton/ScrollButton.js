import React, { useState } from "react";
import "./ScrollButton.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <div className="scrollTop-btn">
        <i
          className="fa-solid fa-arrow-up"
          onClick={scrollToTop}
          style={{ display: visible ? "inline" : "none" }}
        ></i>
      </div>
    </>
  );
};

export default ScrollButton;
