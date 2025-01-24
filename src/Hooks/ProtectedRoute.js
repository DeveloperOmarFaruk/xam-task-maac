import React from "react";
import { useSelector } from "react-redux"; // Importing useSelector to access Redux state
import { Navigate, useLocation } from "react-router-dom"; // Importing Navigate and useLocation for routing
import Loading from "./Loading"; // Importing Loading component for displaying loading state

const ProtectedRoute = ({ children }) => {
  // useLocation is used to get the current location (pathname) for redirect purposes
  const location = useLocation();

  // Retrieving the token and loading state from Redux store
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.loading);

  // If loading is true, display the Loading component
  if (loading) {
    return <Loading />;
  }

  // If token exists, render the children (protected content)
  // If not, redirect to the login page, passing the current location to 'state' for possible redirection after login
  return token ? (
    children
  ) : (
    <Navigate state={{ from: location.pathname }} to="/login" />
  );
};

export default ProtectedRoute;
