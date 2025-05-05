import React from "react";
import { CalendarDays, Clock } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  category,
  title,
  description,
  tags,
  date,
  readTime,
  author,
}) => {
  return (
    <div className="relative mt-10 bg-zinc-900 brightness-100 md:brightness-50 hover:brightness-90 rounded-md overflow-hidden shadow-md hover:shadow-lg shadow-white/10 transition-all duration-300 w-full max-w-sm border border-white/10 hover:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.1),_transparent)]">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale-50" />
        <span className="absolute top-2 right-2 bg-black/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)] gap-3">
        <div className="text-sm text-gray-400 flex items-center gap-3">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-2 text-xs">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/10 text-white px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-white font-medium">{author}</span>
          <button className="bg-white/20 cursor-pointer hover:bg-white/30 text-white text-sm px-3 py-1 rounded-full">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
