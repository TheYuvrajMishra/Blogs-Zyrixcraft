import React from "react";

const Subscribe: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-16 text-center px-4 py-8 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent)] rounded-lg">
      {" "}
      {/* Added background, adjusted padding and rounded corners */}
      <div className="w-full md:w-1/2 mx-auto">
        <h2 className="text-2xl font-bold text-gray-200 mb-3">
          {" "}
          {/* Adjusted text size and color */}
          Stay Updated
        </h2>
        <p className="text-white/50 mb-5">
          {" "}
          {/* Adjusted text color and bottom margin */}
          Subscribe to our newsletter to get the latest articles and updates
          directly in your inbox. {/* Slightly rephrased based on screenshot */}
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
          {" "}
          {/* Adjusted gap and added horizontal padding */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/2 sm:flex-1 m-2 px-1 py-2 rounded-xl bg-zinc-800 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-white/20 border border-white/25 focus:border-white/25" // Adjusted padding, rounded corners, background, placeholder, and focus ring/border
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-3 py-1.5 font-thin cursor-pointer bg-white/55 text-black rounded-xl  hover:bg-white/30  transition" // Adjusted padding, background, text color, rounded corners, and hover
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
