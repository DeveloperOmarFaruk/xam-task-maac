import React from "react";
import ReactDOM from "react-dom/client"; // Use ReactDOM from react-dom/client
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./Redux/store/store";
import { Provider } from "react-redux";

// Get the root element
const rootElement = document.getElementById("root");

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
