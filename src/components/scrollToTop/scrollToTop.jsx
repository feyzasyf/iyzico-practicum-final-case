import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./scrollToTop.styles.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      <button
        className={`scroll-to-top ${isVisible ? "show" : ""}`}
        type="button"
        onClick={handleScrollToTop}
      >
        <AiOutlineArrowUp className="scroll-icon" />
      </button>
    </div>
  );
};

export default ScrollToTop;
