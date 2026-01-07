import React from "react";
import { Link } from "react-router-dom";

import "./banner.css";

const GetStarted = () => {
  return (
    <>
      <div
        id="getstarted_section"
        className="bg-black text-white flex items-center justify-center px-8 py-20"
      >
        {/* <div className="absolute inset-0 bg-black/70 z-0"></div> */}
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 z-10 gap-6">
          {/* LEFT CONTENT */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Ready to Print Your Designs?
            </h2>
            <p className="text-gray-300 text-sm max-w-md">
              Get high-quality screen printing for shirts and custom apparel.
              Fast turnaround, premium results, and designs that last. Your
              brand, business, or personal project — we print it with care.
            </p>
          </div>

          {/* RIGHT CONTENT (BUTTONS) */}
          <div className="md:w-1/2 flex flex-col flex-row items-center justify-center md:justify-end gap-6">
            <Link
              to="/#services"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3.5 font-small transition text-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
