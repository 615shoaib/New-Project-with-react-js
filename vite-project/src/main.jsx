import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Api from "./Content/Api.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Api>
  <App />
  </Api>
  </React.StrictMode>
);
