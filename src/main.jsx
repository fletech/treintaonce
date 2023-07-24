import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/index.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
