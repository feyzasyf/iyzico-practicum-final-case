import React, { useEffect, useState } from "react";
import { ScrollButton, ScrollIcon } from "./scrollToTop.styles";
import { throttle } from "../../utils/utilFunctions";

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
    window.addEventListener("scroll", throttle(toggleVisibility, 250));

    // cleanup function
    return () => {
      window.removeEventListener("scroll", throttle(toggleVisibility, 250));
    };
  }, []);

  return (
    <div>
      <ScrollButton      
        type="button"
        isVisible={isVisible}
        onClick={handleScrollToTop}
      >
        <ScrollIcon />
        </ScrollButton>
    </div>
  );
};

export default ScrollToTop;
