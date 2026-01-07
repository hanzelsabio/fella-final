import React from "react";

import Hero from "../../components/layout/Hero/Hero";
import Products from "../../components/layout/Services/Product";
import About from "../../components/layout/About/About";
import OurWorks from "../../components/layout/OurWorks/OurWorks";
import Reviews from "../../components/layout/Reviews/Reviews";
import Footer from "../../components/layout/Footer/Footer";
import "../../assets/styles/global.css";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <OurWorks />
      <Reviews />
      <div className="bg-black text-white">
        <Footer />
      </div>
    </>
  );
}
