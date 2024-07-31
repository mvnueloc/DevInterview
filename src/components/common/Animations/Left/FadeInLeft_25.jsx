import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const FadeInLeft_25 = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.2) {
            setIsVisible(true);
          } else {
            // setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -70 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -70 }}
      transition={{ duration: 0.85 }}>
      {children}
    </motion.div>
  );
};

export default FadeInLeft_25;
