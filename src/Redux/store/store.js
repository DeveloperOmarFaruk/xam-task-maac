import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit to create the Redux store
import { authApi } from "../Auth/authApi"; // Importing the authApi for RTK Query endpoints
import authReducer from "../Auth/authSlice"; // Importing the authSlice reducer to manage authentication state
import cartReducer from "../Auth/cartSlice"; // Importing the cartSlice reducer to manage the shopping cart state

// Configuring the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer, // Adding the authReducer to the store to manage the authentication state
    cart: cartReducer, // Adding the cartReducer to the store to manage the cart state
    [authApi.reducerPath]: authApi.reducer, // Adding the authApi reducer for handling API requests from RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware), // Adding the middleware for handling API calls and caching with authApi
});

export default store; // Exporting the store to be used in the app
