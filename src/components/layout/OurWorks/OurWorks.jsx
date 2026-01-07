import React, { useState, useEffect, useRef } from "react";
import ourWorksData from "../../../data/ourWorksData";
import "./ourworks.css";

function OurWorks() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const hasMounted = useRef(false);

  const totalSlides = ourWorksData.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Prevent jump on first render
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const slide = slider.children[current];
    if (!slide) return;

    slider.scrollTo({
      left: slide.offsetLeft,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <section id="our-works" className="our_works_section relative">
      <div className="mx-auto relative">
        {/* ---------- SLIDER (ALL SCREENS) ---------- */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {ourWorksData.map((src, index) => (
            <div
              key={index}
              className="
                snap-start flex-shrink-0
                w-full
                sm:w-1/2
                md:w-1/3
                lg:w-1/4
              "
            >
              <img
                src={src}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* ---------- CONTROLS ---------- */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-white p-3 transition"
          style={{ cursor: "pointer" }}
        >
          ❮
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-white p-3 transition"
          style={{ cursor: "pointer" }}
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default OurWorks;
