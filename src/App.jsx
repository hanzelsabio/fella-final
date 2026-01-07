import React from "react";

import Announcement from "./components/layout/Announcement/Announcement";
import Header from "./components/layout/Header/Header";
import BackToTop from "./components/back_to_top/BackToTop";

import { ProductProvider } from "./context/ProductContext";

import AppRoutes from "./routes/AppRoutes";

import "./assets/styles/global.css";

function App() {
  return (
    <>
      <ProductProvider>
        <Announcement />
        <Header />
        <AppRoutes />
        <BackToTop />
      </ProductProvider>
    </>
  );
}

export default App;
