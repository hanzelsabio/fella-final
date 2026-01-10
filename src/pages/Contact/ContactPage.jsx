import React from "react";
import GoogleMap from "../../components/layout/Map/GoogleMap";
import Socials from "../../components/layout/Socials/Socials";
import GetStarted from "../../components/layout/Banner/GetStarted";
import FAQ from "../../components/layout/FAQs/FAQ";
import Footer from "../../components/layout/Footer/Footer";

import Reviews from "../../components/layout/Reviews/Reviews";

import "./contact.css";

const ContactPage = () => {
  return (
    <>
      <div
        id="contact-page-section"
        className="contact_page_section flex justify-center items-center"
      >
        <div className="max-w-7xl mx-auto w-full py-20 px-8">
          {/* GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Socials (column 1) */}
            <div className="col-span-1 md:col-span-4 lg:col-span-1 px-8">
              <Socials />
            </div>

            {/* Google Map (column 2 & 3) */}
            <div className="md:col-span-4 lg:col-span-3">
              <GoogleMap />
            </div>

            {/* Additional Section (column 1) */}
            <div className="md:col-span-4 col-start-1 text-center py-10">
              <p>
                <span className="font-semibold">We're located at:</span> Upper
                Plaza 16-H A.Mabini St Makati City, West Rembo, Philippines
              </p>
            </div>

            {/* You can add more grid items here if needed */}
          </div>
        </div>
      </div>
      <GetStarted />
      <FAQ />
      <Reviews />
      <div className="bg-black text-white">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
