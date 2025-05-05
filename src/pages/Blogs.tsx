// import React from "react";
import BlogHero from "../components/BlogHero";
import GradiantLine from "../components/GradiantLine";
import FeaturedBlog from "../components/FeaturedBlog";
import BlogCard from "../components/BlogCard";
import Subscribe from "../components/Subscribe";
import NoiseOverlay from "../components/NoiseOverlay";
import BlurBlob from "../components/BlurBlob";
import GlowingMouseTrailer from "../components/MouseTrailer";
function blogs() {
  const posts = [
    {
      image:
        "https://www.wepc.com/wp-content/uploads/2023/07/15-inch-MacBook-Air-vs-13-inch-MacBook-Air-vs-15-inch-MacBook-Air-.jpg",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Sheikh Yuvraj",
    },
    {
      image:
        "https://thinkfree.com/wp-content/uploads/2024/01/thinkfree-online-office-history-1.webp",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Md. Ram",
    },
    {
      image:
        "https://www.maketecheasier.com/assets/uploads/2024/06/keep-windows-running-with-lid-closed.jpg?width=800&height=400&aspect_ratio=2:1",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Raghav Hussain",
    },
    {
      image:
        "https://soeithelp.stanford.edu/sites/g/files/sbiybj26301/files/styles/card_1900x950/public/media/image/macbook_unplash_1.jpeg?h=c673cd1c&itok=t2uNNJRB",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "Abdul Singh",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.NeMZXukPJ19BZ56z5JbvwwHaEO?rs=1&pid=ImgDetMain",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "OniChan Kumar",
    },
    {
      image:
        "https://www.wepc.com/wp-content/uploads/2023/07/15-inch-MacBook-Air-vs-13-inch-MacBook-Air-vs-15-inch-MacBook-Air-.jpg",
      category: "Science",
      title: "Quantum Computing Breakthroughs",
      description:
        "New advancements in quantum computing that could change our technological landscape forever.",
      tags: ["Quantum", "Computing", "Research"],
      date: "25 April 2025",
      readTime: "8 min",
      author: "walter kumar singh",
    },
  ];
  return (
    <div className="bg-black">
      <NoiseOverlay />
      <GlowingMouseTrailer/>
      <BlogHero />
      <div className="flex">
        <GradiantLine />
        <div className="w-fit bg-white/20 text-center whitespace-nowrap text-sm text-white/80 rounded-full px-2 py-1/2 mt-0.5">
          <p className="mt-0">
            {/* Removed mt-[2px] from p, added py-1 to parent */}
          </p>
          <p>⬡ Featured Article</p>
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
        <div className="w-fit bg-white/20 text-center whitespace-nowrap text-sm text-white/80 rounded-full px-2 py-1/2 mt-0.5">
          <p className="mt-0">
            {/* Removed mt-[2px] from p, added py-1 to parent */}
          </p>
          <p>⬡ More Article</p>
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
      <BlurBlob/>
      <Subscribe />
    </div>
  );
}

export default blogs;
