import React from "react";
import "./banner.css";

function Banner() {
  return (
    <>
      <div
        id="banner_section"
        className="text-white flex items-center justify-center shadow-md z-20 h-[60vh]"
      >
        <div className="absolute inset-0 bg-black/80 z-0"></div>
      </div>
    </>
  );
}

export default Banner;
