import { createSlice } from "@reduxjs/toolkit"; // Importing the necessary function to create a slice

// Creating the auth slice to manage authentication state
const authSlice = createSlice({
  name: "auth", // This is the name of the slice (used to identify it in the Redux store)
  initialState: {
    user: null, // Initial state for the user (null means no user is logged in initially)
    token: localStorage.getItem("token") || null, // Initial state for the token (retrieves token from localStorage or sets it to null if none exists)
  },
  reducers: {
    // Reducer to set the user and token when credentials are provided
    setCredentials: (state, action) => {
      state.user = action.payload.user; // Setting the user data in the state
      state.token = action.payload.token; // Setting the token in the state
      localStorage.setItem("token", action.payload.token); // Storing the token in localStorage to persist the user's session
    },
    // Reducer to clear the user data and token (log the user out)
    logout: (state) => {
      state.user = null; // Clearing user data from the state
      state.token = null; // Clearing the token from the state
      localStorage.removeItem("token"); // Removing the token from localStorage
    },
  },
});

// Exporting the actions created by the slice (for use in dispatching in components)
export const { setCredentials, logout } = authSlice.actions;
// Exporting the reducer to be included in the Redux store
export default authSlice.reducer;
