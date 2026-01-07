import React from "react";
import Products from "../../components/layout/Services/Product";
import FAQ from "../../components/layout/FAQs/FAQ";

import "./homepage.css";

function HomePage() {
  return (
    <>
      <section
        id="hero_section"
        className="relative text-white flex items-center justify-center shadow-md py-50 z-20 min-h-[90vh]"
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="relative z-10 text-white text-center px-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Print Your Vision, Wear Your Style
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Fella Screen Prints delivers high-quality direct-to-film printing
            for apparel, merchandise, and brands — crafted with precision and
            passion.
          </p>
        </div>
      </section>
      <div className="main_background">
        <Products />
      </div>
      <section id="about-us" className="about_section">
        <div className="max-w-2xl mx-auto py-60 px-8 md:py-80">
          <div className="absolute inset-0 bg-black/70 z-0"></div>
          <div className="relative z-10 text-white text-center">
            <h1 className="text-white text-2xl font-medium mb-10 text-center">
              About Us
            </h1>
            <p className="text-gray-300 text-lg font-small text-center">
              Fella Screen Prints is a service that offers a direct-to-film
              printing. Specializing in custom apparel and merchandise for
              individuals, small brands, events, and organizations. With a focus
              on quality, creativity, and reliability, we help you turn your
              designs into wearable art—whether you’re launching a clothing
              brand, organizing an event, creating uniforms for a team, or
              simply printing a few shirts for fun.
            </p>
          </div>
        </div>
      </section>
      <div className="main_background">
        <FAQ />
      </div>
      <section id="our-works" className="our_works_section">
        <OurWorks />
      </section>

      <section className=""></section>
      <section className=""></section>
    </>
  );
}

export default HomePage;
