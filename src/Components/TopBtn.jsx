import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollNav = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.a
      onClick={() => handleScrollNav("home")}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.7 }}
      className="fixed bottom-12 right-5 cursor-pointer rounded border-primary bg-primary p-3 lg:bottom-11 lg:right-14"
    >
      <FaArrowUpLong className="text-lg text-black" />
    </motion.a>
  );
};

export default TopBtn;
