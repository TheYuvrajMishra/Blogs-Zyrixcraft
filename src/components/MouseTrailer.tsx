import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * A glowing mouse trailer component that follows the cursor.
 * Uses Framer Motion for smooth animation.
 */
const GlowingMouseTrailer: React.FC = () => {
  // State to store the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to update mouse position on mousemove
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  // Define the variants for the Framer Motion animation
  const variants = {
    default: {
      x: mousePosition.x - 140, // Adjust position by half of the element's size (32px / 2 = 16px)
      y: mousePosition.y - 140,
      transition: {
        type: 'spring', // Use a spring animation for smooth follow
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-70 h-70 bg-blue-600/5 opacity-50 rounded-full pointer-events-none filter blur-3xl z-50"
      variants={variants}
      animate="default"
    >
      {/* The div itself creates the glowing effect */}
    </motion.div>
  );
};

export default GlowingMouseTrailer;
