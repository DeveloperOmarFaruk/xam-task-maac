import React from "react";

const Loading = () => {
  return (
    <>
      {/* Wrapper div for centering the spinner and loading text */}
      <div style={{ padding: "12rem 0rem" }}>
        {/* Row to align the spinner at the center */}
        <div className="row w-100">
          {/* Empty columns to center the content horizontally */}
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>

          {/* Center column containing the loading spinner and text */}
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-center">
            {/* Spinner element with a blue color */}
            <div
              className="spinner-border"
              style={{ color: "#0052cc" }} // Custom color for the spinner
              role="status"
            >
              <span className="visually-hidden">Loading...</span>{" "}
              {/* Accessibility label */}
            </div>

            {/* Loading text with custom font size and color */}
            <div
              className="text-center"
              style={{ color: "#0052cc", fontSize: "1.3rem" }} // Custom text color and font size
            >
              <p>Loading...</p> {/* Display loading text */}
            </div>
          </div>

          {/* Empty columns again for centering */}
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
