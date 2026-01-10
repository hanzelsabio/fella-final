import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-6 right-6 
            bg-green-500 text-white 
            p-5 shadow-lg 
            rounded-full
            hover:bg-green-700 
            transition-all duration-300 
            z-40
          "
          style={{ cursor: "pointer" }}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
