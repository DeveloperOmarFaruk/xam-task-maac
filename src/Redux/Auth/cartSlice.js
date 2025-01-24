import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice from Redux Toolkit for creating the slice

// Helper function to calculate the total price of items in the cart
const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + item.price, 0); // Summing the prices of all items
};

// Helper function to recalculate totals like total price, VAT, and discount
const recalculateTotals = (state) => {
  state.totalPrice = calculateTotalPrice(state.items); // Recalculate the total price of items
  state.totalVAT = state.totalPrice * 0.05; // 5% VAT on the total price
  state.discount = state.coupon === "Xampro100" ? state.totalPrice * 0.1 : 0; // Apply 10% discount if coupon is "Xampro100"
};

// Initial state with values loaded from localStorage, or default values if not available
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [], // Getting cart items from localStorage or initializing with an empty array
  totalPrice: 0, // Initial total price
  totalVAT: 0, // Initial VAT
  discount: 0, // Initial discount
  coupon: "", // Coupon code used
};

// Calculate totals on initialization if items are available in the cart
if (initialState.items.length > 0) {
  initialState.totalPrice = calculateTotalPrice(initialState.items); // Calculate total price if there are items
  initialState.totalVAT = initialState.totalPrice * 0.05; // Calculate VAT if there are items
}

const cartSlice = createSlice({
  name: "cart", // Name of the slice
  initialState, // Setting the initial state
  reducers: {
    // Action to add an item to the cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id // Check if the item already exists in the cart
      );
      if (!existingItem) {
        // If the item does not exist, add it
        state.items.push(action.payload); // Add the item to the cart
        recalculateTotals(state); // Recalculate totals (price, VAT, discount)
        localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save updated cart to localStorage
      }
    },
    // Action to remove an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id); // Remove the item from the cart
      recalculateTotals(state); // Recalculate totals after removal
      localStorage.setItem("cartItems", JSON.stringify(state.items)); // Save updated cart to localStorage
    },
    // Action to apply a coupon to the cart
    applyCoupon: (state, action) => {
      state.coupon = action.payload === "Xampro100" ? action.payload : ""; // Apply coupon if it's "Xampro100"
      recalculateTotals(state); // Recalculate totals after applying coupon
    },
    // Action to clear the cart
    clearCart: (state) => {
      state.items = []; // Clear the items array
      state.totalPrice = 0; // Reset total price
      state.totalVAT = 0; // Reset VAT
      state.discount = 0; // Reset discount
      state.coupon = ""; // Reset coupon
      localStorage.removeItem("cartItems"); // Remove cart from localStorage
    },
  },
});

// Exporting the actions to use in components for updating the state
export const { addToCart, removeFromCart, applyCoupon, clearCart } =
  cartSlice.actions;

// Exporting the reducer to be used in the store
export default cartSlice.reducer;
