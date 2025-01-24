import axios from "axios"; // Importing axios for making HTTP requests

// Creating an axios instance with a predefined base URL
const axiosInstance = axios.create({
  baseURL: "https://api.xampro.org/api/v1", // The base URL for all API requests
});

// Setting up a request interceptor to add the Authorization header with the token if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Retrieving the token from localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // Adding the token to the Authorization header
  }
  return config; // Returning the modified config
});

// Exporting the axios instance to use in other parts of the application for making API requests
export default axiosInstance;
