import React from 'react';

// Define the props for the BlurBlob component
interface BlurBlobProps {
  /**
   * The size of the blob. Use Tailwind CSS classes for width and height (e.g., 'w-64 h-64', 'w-1/2 h-1/2').
   */
  size?: string;
  /**
   * The background color of the blob. Use Tailwind CSS classes (e.g., 'bg-blue-500', 'bg-purple-400').
   */
  bgColor?: string;
  /**
   * Additional CSS classes for custom styling.
   */
  className?: string;
}

/**
 * A responsive blur blob component that is centered on the screen.
 * It is hidden on small screens (phone) and visible on larger screens.
 */
const BlurBlob: React.FC<BlurBlobProps> = ({
  size = 'w-64 h-64', // Default size
  bgColor = 'bg-white/50', // Default background color
  className = '',
}) => {
  // Classes for centering and styling the blob
  const blobClasses = `
    absolute
    -bottom-20 // Position 50% from the top
    left-1/2 // Position 50% from the left
    transform -translate-x-1/2 -translate-y-1/2 // Translate back by half of its width/height to truly center it
    rounded-full
    z-9
    filter blur-3xl // Apply blur filter
    opacity-10 // Adjust opacity
    ${size}
    ${bgColor}
    hidden // Hide by default on small screens
    sm:block // Show on small screens and up (adjust breakpoint as needed)
    ${className}
  `;

  return (
    <div className={blobClasses} aria-hidden="true">
      {/* Content is not needed for a decorative blob */}
    </div>
  );
};

export default BlurBlob;
