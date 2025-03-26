import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Utility function to split text into animated lines
const splitLines = (text) =>
  text.split("\n").filter((line) => line.trim() !== "");

const About = () => {
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const primaryText = `
    Hi, I'm Victor David, a photographer dedicated to capturing moments that tell a story.
    With a keen eye for detail, I specialize in portraits and lifestyle photography.
    Photography, for me, is more than just taking pictures - it's about freezing emotions,
    creating timeless memories, and showcasing the beauty in everyday life.
  `;

  const secondaryText = `
    With years of experience in photo editing and retouching,
    I ensure every shot is refined to perfection while maintaining authenticity.
    Whether it's a personal portrait, event, or creative project,
    I strive to deliver images that resonate deeply with clients.
  `;

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const lineVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
    exit: (i) => ({
      y: -100,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
      },
    }),
  };

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;

      // Clear any existing timer when intersection state changes
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      if (entry.isIntersecting) {
        // Add delay before switching to secondary text
        timerRef.current = setTimeout(() => {
          setIsActive(true);
        }, 9000); // 9 second delay
      } else {
        // Switch back to primary text immediately when out of view
        setIsActive(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      <div id="about" className="max-w-2xl relative">
        <AnimatePresence mode="wait">
          {!isActive ? (
            <motion.div
              key="primary"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              {splitLines(primaryText).map((line, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden"
                  variants={lineVariants}
                  custom={index}
                >
                  <p className="text-center text-xl md:text-2xl leading-relaxed">
                    {line}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="secondary"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={containerVariants}
            >
              {splitLines(secondaryText).map((line, index) => (
                <motion.div
                  key={index}
                  className="overflow-hidden"
                  variants={lineVariants}
                  custom={index}
                >
                  <p className="text-center text-xl md:text-2xl leading-relaxed">
                    {line}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
