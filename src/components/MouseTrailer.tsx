import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * A glowing mouse trailer component that follows the cursor.
 * Changes appearance and shows an arrow when hovering over elements
 * with the class 'BlogCard' or 'FeaturedBlog'.
 * Vanishes on mobile and tablet devices.
 */
const GlowingMouseTrailer: React.FC = () => {
  // State to store the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // State to track if the mouse is hovering over a target element
  const [isHoveringTarget, setIsHoveringTarget] = useState(false);
  // State to track if the device is likely mobile or tablet
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Effect to determine if the device is mobile or tablet on mount and window resize
  useEffect(() => {
    const checkScreenSize = () => {
      // Define a breakpoint for mobile/tablet (e.g., 1024px, common for tablets)
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    // Check screen size on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []); // Empty dependency array ensures this effect runs only on mount and unmount

  // Effect to update mouse position and detect hover state, only if not mobile/tablet
  useEffect(() => {
    // If it's a mobile or tablet device, do not add the mousemove listener
    if (isMobileOrTablet) {
      return undefined; // Return cleanup function that does nothing
    }

    const handleMouseMove = (event: MouseEvent) => {
      // Update mouse position
      setMousePosition({ x: event.clientX, y: event.clientY });

      // Check if the mouse is over a target element by looking for specific classes
      const target = event.target as HTMLElement;
      const isOverTarget = target.closest('.BlogCard, .FeaturedBlog') !== null;

      // Update hover state only if it has changed to avoid unnecessary re-renders
      if (isOverTarget !== isHoveringTarget) {
        setIsHoveringTarget(isOverTarget);
      }
    };

    // Add event listener for mousemove across the entire window
    window.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHoveringTarget, isMobileOrTablet]); // Re-run effect if hover state or mobile/tablet status changes

  // If it's a mobile or tablet device, render nothing
  if (isMobileOrTablet) {
    return null;
  }

  // Define the variants for the Framer Motion animation
  const variants = {
    // Default glowing state (w-70 h-70, opacity 50%, blur-3xl, bg-blue-600/5)
    default: {
      // Center the 70x70 element (70 / 2 = 35)
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: 70,
      height: 70,
      opacity: 0.5,
      // Using rgba for bg-blue-600/5 (Tailwind's blue-600 is #2563EB, 5% opacity)
      backgroundColor: 'rgba(37, 99, 235, 0.1)',
      filter: 'blur(48px)', // Tailwind's blur-3xl is 48px
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20, // User's specified damping
      },
    },
    // Hover state over target elements (w-8 h-8, full opacity, no blur, white background, arrow)
    hoverTarget: {
      // Center the 8x8 element (8 / 2 = 4). Tailwind w-8/h-8 is 32px.
      x: mousePosition.x - 16, // Center the 32x32 element (32 / 2 = 16)
      y: mousePosition.y - 16,
      width: 32, // Corresponds to Tailwind w-8
      height: 32, // Corresponds to Tailwind h-8
      opacity: 1, // Full opacity
      backgroundColor: 'rgba(255, 255, 255, 1)', // White background
      filter: 'blur(0px)', // No blur
      transition: {
        type: 'spring',
        stiffness: 150, // Slightly stiffer spring for a snappier feel
        damping: 15,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 flex items-center justify-center"
      variants={variants}
      // Animate based on the hover state
      animate={isHoveringTarget ? 'hoverTarget' : 'default'}
    >
      {/* Arrow icon - only rendered when hovering over target */}
      {isHoveringTarget && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-800 transform -rotate-45" // Adjust size and color as needed, rotate 45 degrees
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7 7l7-7-7-7" />
        </svg>
      )}
    </motion.div>
  );
};

export default GlowingMouseTrailer;