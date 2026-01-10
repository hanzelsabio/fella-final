import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.css";
import { BrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/helper/ScrollToTop";
import ScrollToHash from "./components/helper/ScrollToHash";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToHash />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
