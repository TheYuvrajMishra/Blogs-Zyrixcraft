// components/hero.tsx
import React from "react";
import { motion } from "framer-motion";
import BlurBlob from "./BlurBlob";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
const categories = [
  "All Posts",
  "Technology",
  "Science",
  "Environment",
  "Ethics",
];

const Hero: React.FC = () => {
  const text = "Technology";
  const characters = text.split("");

  // Variants for the parent container to coordinate the stagger effect
  const containerVariants = {
    animate: {
      transition: {
        // Stagger the animation of children by 0.05 seconds
        staggerChildren: 0.1,
      },
    },
  };
  const scrollRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    } as any); // <--- Force it to accept 'el'

    return () => {
      scroll.destroy();
    };
  }, []);

  // Variants for each individual character
  const characterVariants = {
    // Initial state (optional, could be just before animation)
    initial: {
      // You could start with less glow or slight transparency
      filter: "drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.5))", // Smaller, slightly transparent glow
      opacity: 0.8,
    },
    // Animation state
    animate: {
      filter: [
        "drop-shadow(0px 0px 5px white)", // Start with a smaller glow
        "drop-shadow(0px 0px 25px white)", // Pulse to a larger, more intense glow
        "drop-shadow(0px 0px 5px white)", // Return to the smaller glow
      ],
      opacity: [0.8, 1, 0.8], // Pulse opacity along with the glow
      transition: {
        duration: 5, // Duration of one pulse cycle for a character
        ease: "easeInOut",
        repeat: Infinity, // Loop the pulse indefinitely
        // The stagger effect is handled by the parent container
      },
    },
  };

  return (
    <section
      data-scroll
      data-scroll-speed="0.1"
      className="flex flex-col items-center justify-center text-center py-24 text-white"
    >
      <BlurBlob />
      <div className="mb-4 px-4">
        <span className="bg-white/20 text-xs uppercase px-3 py-1 rounded-full text-white tracking-wider">
          ⚡ ZyrixCraft
        </span>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
        Exploring Tomorrow's{" "}
        <motion.span
          className="text-white/80 bg-clip-text bg-gradient-to-t from-white via-white/50 to-white inline-block" // Apply text styles here. inline-block prevents it from taking full width.
          variants={containerVariants} // Apply the stagger variants
          initial="initial" // Set initial state (optional)
          animate="animate" // Trigger the main animation sequence
        >
          {characters.map((char, index) => (
            // Each character is a motion component
            <motion.span
              key={index} // Unique key for mapping
              className="inline-block" // Keep characters on the same line
              variants={characterVariants} // Apply individual character animation variants
              // The initial and animate props on the parent will propagate
              // initial="initial" // Could explicitly set here too, but parent propagates
              // animate="animate" // Could explicitly set here too, but parent propagates
            >
              {char === " " ? "\u00A0" : char} {/* Render space correctly */}
            </motion.span>
          ))}
        </motion.span>
      </h1>
      <p className="mt-4 max-w-xl text-white/50 text-lg">
        Dive into cutting-edge insights about AI, quantum computing, and the
        future of digital innovation.
      </p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-white/5 text-sm border border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/10 transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
