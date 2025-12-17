import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./index.scss";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? "active" : ""}`} onClick={scrollToTop}>
      <FaChevronUp />
    </div>
  );
}