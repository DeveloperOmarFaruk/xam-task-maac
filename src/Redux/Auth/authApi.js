import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Importing the necessary functions to create the API slice

// Creating an API slice using Redux Toolkit's createApi function
export const authApi = createApi({
  reducerPath: "authApi", // This is the unique name for the API slice in the Redux store
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.xampro.org/api/v1", // The base URL for all API requests
    prepareHeaders: (headers) => {
      // This function sets the authorization token from localStorage if it exists
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Adding the token to the request headers
      }
      return headers;
    },
  }),
  // Defining the endpoints for the API
  endpoints: (builder) => ({
    register: builder.mutation({
      // This defines a mutation for registering a user
      query: (userData) => ({
        url: "/signup", // API endpoint for user registration
        method: "POST", // HTTP method
        body: userData, // Passing the user data in the request body
      }),
    }),
    login: builder.mutation({
      // This defines a mutation for logging in a user
      query: (credentials) => ({
        url: "/login", // API endpoint for user login
        method: "POST", // HTTP method
        body: credentials, // Passing the login credentials in the request body
      }),
    }),
    getProfile: builder.query({
      // This defines a query to fetch the current user's profile data
      query: () => "/get-me", // API endpoint to get user profile
    }),
    getPopularPackages: builder.query({
      // This defines a query to fetch the top three popular packages
      query: () => "/package/get-top-three-popular-package", // API endpoint to get popular packages
    }),
    getAllServices: builder.query({
      // This defines a query to fetch all available services
      query: () => "/service/getallservices", // API endpoint to get all services
    }),
    getCoursesType: builder.query({
      // This defines a query to fetch available course types
      query: () => "/get-courses", // API endpoint to get courses
    }),
  }),
});

// Exporting the auto-generated hooks for each endpoint
export const {
  useRegisterMutation, // Hook for the register mutation
  useLoginMutation, // Hook for the login mutation
  useGetProfileQuery, // Hook for the getProfile query
  useGetPopularPackagesQuery, // Hook for the getPopularPackages query
  useGetAllServicesQuery, // Hook for the getAllServices query
  useGetCoursesTypeQuery, // Hook for the getCoursesType query
} = authApi;
