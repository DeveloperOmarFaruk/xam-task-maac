import "./App.css"; // Importing CSS styles for the App
import { Route, Routes, useLocation } from "react-router-dom"; // Importing routing components from react-router-dom for handling navigation
import LoginPage from "./Pages/LoginPage"; // Importing the LoginPage component
import RegisterPage from "./Pages/RegisterPage"; // Importing the RegisterPage component
import { useEffect } from "react"; // Importing useEffect hook from React
import Navbar from "./Components/Navbar/Navbar"; // Importing the Navbar component
import MyPackagePage from "./Pages/MyPackagePage"; // Importing the MyPackagePage component
import CommonFooter from "./Components/CommonFooter/CommonFooter"; // Importing the CommonFooter component
import CartPage from "./Pages/CartPage"; // Importing the CartPage component
import CreatePackagePage from "./Pages/CreatePackagePage"; // Importing the CreatePackagePage component
import HomePage from "./Pages/HomePage"; // Importing the HomePage component
import HomeFooter from "./Components/HomeFooter/HomeFooter"; // Importing the HomeFooter component
import ProtectedRoute from "./Hooks/ProtectedRoute"; // Importing ProtectedRoute for guarding routes that require authentication
import Error from "./Components/Error/Error"; // Importing the Error component for handling 404 or undefined routes
import PackagesPage from "./Pages/PackagesPage"; // Importing the PackagesPage component
import UpCommingPage from "./Pages/UpCommingPage"; // Importing the UpCommingPage component
import ScrollButton from "./Components/ScrollButton/ScrollButton";

// Custom hook to update the page title based on the current route
function usePageTitle() {
  const location = useLocation(); // Using the useLocation hook to get the current location

  useEffect(() => {
    const pathName = location.pathname; // Getting the current pathname

    // Mapping the pathname to the corresponding page title
    const pageTitles = {
      "/": "Xam Assignmnet",
      "/login": "Login - Xam Assignmnet",
      "/registration": "Registration - Xam Assignmnet",
      "/my-package": "My Package - Xam Assignmnet",
      "/cart": "Cart - Xam Assignmnet",
      "/create-package": "Create Package - Xam Assignmnet",
      "/packages/Ielts": "IELTS Packages - Xam Assignmnet",
    };

    // Setting the document title based on the current pathname
    document.title = pageTitles[pathName] || "Xam Assignmnet"; // Default title is "Xam Assignmnet"
  }, [location]); // Effect runs whenever the location changes
}

function App() {
  const location = useLocation(); // Getting the current location
  const excludedRoutes = ["/login", "/registration"]; // Routes that should not show the Navbar
  const excludedRoutesFooter = [
    "/login",
    "/registration",
    "/my-package",
    "/cart",
    "/create-package",
    "/packages/Ielts",
  ]; // Routes that should not show the HomeFooter and CommonFooter

  return (
    <>
      <TitleUpdater /> {/* Updating the page title */}
      {/* Conditionally rendering Navbar based on the route */}
      {!excludedRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        {/* Defining the route paths and their respective components */}
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/packages/Ielts" element={<PackagesPage />} />
        <Route path="/upcoming" element={<UpCommingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />

        {/* Protected routes for CreatePackagePage and MyPackagePage */}
        <Route
          path="/create-package"
          element={
            <ProtectedRoute>
              <CreatePackagePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-package"
          element={
            <ProtectedRoute>
              <MyPackagePage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for undefined routes */}
        <Route path="*" element={<Error />} />
      </Routes>
      {/* Conditionally rendering HomeFooter and CommonFooter based on the route */}
      <ScrollButton />
      {!excludedRoutesFooter.includes(location.pathname) && <HomeFooter />}
      {!excludedRoutes.includes(location.pathname) && <CommonFooter />}
    </>
  );
}

// Component that calls the usePageTitle hook to update the document title
function TitleUpdater() {
  usePageTitle();
  return null;
}

export default App;
