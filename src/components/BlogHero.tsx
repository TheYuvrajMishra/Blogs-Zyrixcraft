// components/hero.tsx
import React from "react";

const categories = ["All Posts", "Technology", "Science", "Environment", "Ethics"];

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 text-white">
      <div className="mb-4 px-4">
        <span className="bg-white/20 text-xs uppercase px-3 py-1 rounded-full text-white tracking-wider">
          ⚡ ZyrixCraft
        </span>
      </div>
      <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">
        Exploring Tomorrow's <span className="drop-shadow-[0px_0px_20px_white] text-transparent bg-clip-text bg-gradient-to-t from-white via-white/50 to-white">Technology</span>
      </h1>
      <p className="mt-4 max-w-xl text-white/50 text-lg">
        Dive into cutting-edge insights about AI, quantum computing, and the future of digital innovation.
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
