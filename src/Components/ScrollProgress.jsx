import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollProgress = () => {
  const [isScrollBarShow, setIsScrollBarShow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleRestoreScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      if (progress > 25) {
        setIsScrollBarShow(true);
      } else {
        setIsScrollBarShow(false);
      }
    };
    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  // Circle settings
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      onClick={handleRestoreScroll}
      className={`${
        isScrollBarShow ? "block" : "hidden"
      } fixed bottom-10 right-10 w-12 h-12  rounded-full flex items-center justify-center bg-white cursor-pointer z-20 shadow-xl`}
    >
      {/* SVG Circular Border */}
      <svg
        className="absolute w-14 h-14 transform -rotate-90"
        viewBox="0 0 60 60"
      >
        {/* Background Circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke={scrollProgress > 68 ? "#ef4444" : "#22c55e"} // Tailwind red-500
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <FaArrowUp
        size={22}
        className={`${
          scrollProgress > 68 ? "text-[#f33232]" : "text-[#22c55e]"
        }`}
      />
    </div>
  );
};

export default ScrollProgress;
