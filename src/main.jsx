import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "./context/index.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "../styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
