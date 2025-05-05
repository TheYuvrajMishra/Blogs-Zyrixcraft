// import React from "react";
import BlogHero from "../components/BlogHero";
import GradiantLine from "../components/GradiantLine";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogCard from "../components/BlogCard";
import Subscribe from "../components/Subscribe";
import NoiseOverlay from "../components/NoiseOverlay";
function blogs() {
  const posts = [
    {
      image: "https://picsum.photos/id/201/200/300",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Jamie Chen",
    },
    {
      image: "https://picsum.photos/id/202/200",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Jamie Chen",
    },
    {
      image: "https://picsum.photos/id/203/200",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Jamie Chen",
    },
    {
      image: "https://picsum.photos/id/204/200",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Jamie Chen",
    },
    {
      image: "https://picsum.photos/id/206/200",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Jamie Chen",
    },
  ];
  return (
    <div className="bg-black">
      <NoiseOverlay/>
      <BlogHero />
      <div className="flex">
        <GradiantLine />
        <div className="h-6 w-35 bg-white/20 text-center text-[13px] text-white/80 rounded-full">
          <p className="mt-[3px]">⬡ Featured Article</p>
        </div>
        <GradiantLine />
      </div>
      <FeaturedBlog
        image="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="The Future of AI in Web Development"
        description="Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications."
        tags={["AI", "WebDev", "Future"]}
        date="28 April 2025"
        readTime="5 min"
        author="Alex Morgan"
        featured={true}
      />
      <div className="flex mt-20">
        <GradiantLine />
        <div className="h-6 w-35 bg-white/20 text-center text-[13px] text-white/80 rounded-full">
          <p className="mt-[3px]">⬡ More Articles</p>
        </div>
        <GradiantLine />
      </div>
      <div className="flex justify-center m-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-9 -gap-y-5">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
      <Subscribe/>
    </div>
  );
}

export default blogs;
