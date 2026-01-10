import React from "react";
import "./about.css";

import SectionTitle from "../../common/SectionTitle";

const About = () => {
  return (
    <section id="about-us" className="about_section">
      <div className="max-w-2xl mx-auto pt-50 pb-70 px-8 md:py-50">
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 text-white text-center">
          <SectionTitle title="About Us" />
          <p className="text-gray-300 text-lg font-small text-center py-10">
            Fella Screen Prints is a service that offers a direct-to-film
            printing. Specializing in custom apparel and merchandise for
            individuals, small brands, events, and organizations. With a focus
            on quality, creativity, and reliability, we help you turn your
            designs into wearable art—whether you’re launching a clothing brand,
            organizing an event, creating uniforms for a team, or simply
            printing a few shirts for fun.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
