import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

import SectionTitle from "../../common/SectionTitle";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      name: "John D.",
      text: "Amazing quality prints! Super fast turnaround time. Highly recommended!",
      rating: 5,
    },
    {
      name: "Maria S.",
      text: "Great customer service and the shirts came out perfect. Will order again!",
      rating: 4,
    },
    {
      name: "Kevin P.",
      text: "Affordable yet premium quality materials. Really impressed with the results!",
      rating: 5,
    },
    {
      name: "Anne T.",
      text: "The colors were vibrant and the details were sharp. Love it!",
      rating: 5,
    },
  ];

  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const hasMounted = useRef(false);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Prevent auto-scroll on first render
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const slideWidth = slider.clientWidth;

    slider.scrollTo({
      left: slideWidth * current,
      behavior: "smooth",
    });
  }, [current]);

  return (
    <section
      id="reviews"
      className="reviews_section bg-black text-white py-30 px-6"
    >
      <SectionTitle title="Client Reviews" />

      {/* ---------- MOBILE SLIDER ---------- */}
      <div className="md:hidden">
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-full snap-center py-10 px-6 shadow-lg flex flex-col items-center text-center"
            >
              <p className="text-sm leading-relaxed mb-4">"{review.text}"</p>

              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) =>
                  i < review.rating ? (
                    <FaStar key={i} className="text-yellow-400" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-400" />
                  )
                )}
              </div>

              <h3 className="text-lg font-bold">{review.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- DESKTOP GRID ---------- */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((review, index) => (
          <div
            key={index}
            className="py-20 px-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition"
          >
            <p className="text-sm leading-relaxed mb-4">"{review.text}"</p>

            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) =>
                i < review.rating ? (
                  <FaStar key={i} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={i} className="text-yellow-400" />
                )
              )}
            </div>

            <h3 className="text-lg font-bold">{review.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
