import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import reviewsData from "../../../data/reviewsData";

import SectionTitle from "../../common/SectionTitle";
import "./reviews.css";

const Reviews = () => {
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
          {reviewsData.map((review, index) => (
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
        {reviewsData.slice(0, 3).map((review, index) => (
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
