import React from "react";
import "./PopularCourse.css";

const RatingStars = ({ rating }) => {
  // Create an array of 5 stars (since we want to show a max of 5 stars)
  const totalStars = 5;

  // Create an array that represents the star states (full, empty, half)
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < rating) {
      // Full star
      stars.push("★");
    } else if (i < rating + 0.5) {
      // Half star
      stars.push("☆");
    } else {
      // Empty star
      stars.push("☆");
    }
  }

  return (
    <div className="rating-stars">
      {stars.map((star, index) => (
        <span
          key={index}
          className={star === "★" ? "full-star" : "empty-star"}
          style={{ padding: "0px", margin: "0px" }}
        >
          {star}
        </span>
      ))}
    </div>
  );
};

export default RatingStars;
