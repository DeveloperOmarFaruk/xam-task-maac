import React from "react"; // Importing React to use JSX syntax
import OwnPackage from "../Components/OwnPackage/OwnPackage"; // Importing the OwnPackage component
import WeProvide from "../Components/WeProvide/WeProvide"; // Importing the WeProvide component
import PopularCourse from "../Components/PopularCourse/PopularCourse"; // Importing the PopularCourse component
import OurFeature from "../Components/OurFeature/OurFeature"; // Importing the OurFeature component
import Header from "../Components/Header/Header"; // Importing the Header component

const HomePage = () => {
  // The HomePage component is used to render all major sections of the homepage
  return (
    <>
      <Header />{" "}
      {/* The Header component is displayed at the top of the page */}
      <OurFeature /> {/* The OurFeature component is displayed next */}
      <PopularCourse /> {/* The PopularCourse component is displayed next */}
      <WeProvide /> {/* The WeProvide component is displayed next */}
      <OwnPackage /> {/* The OwnPackage component is displayed last */}
    </>
  );
};

export default HomePage; // Exporting the HomePage component to be used elsewhere in the app
