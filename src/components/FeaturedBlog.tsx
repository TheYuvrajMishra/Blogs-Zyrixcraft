// components/card.tsx
import React from "react";
import { CalendarDays, Clock, Star } from "lucide-react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  tags,
  date,
  readTime,
  author,
  featured = false,
}) => {
  return (
    <div className="mx-auto mt-10 flex flex-col brightness-60 hover:brightness-90 md:flex-row bg-black text-white rounded-xl overflow-hidden border border-white/10 w-4/5 shadow-lg hover:shadow-xl transition-all duration-300 group">
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full max-h-80 md:max-h-full group-hover:scale-105 transition-transform duration-200"
        />
      </div>

      <div className="md:w-1/2 p-6 flex flex-col justify-between gap-1">

        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-white/50 -mt-10">{description}</p>

        <div className="flex gap-2 flex-wrap -mt-10 text-sm">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/10 font-mono text-[12px] text-white/50 px-2 py-0 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center -mt-10 text-white/50 text-sm gap-4">
          <div className="flex items-center gap-1">
            <CalendarDays className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readTime}
          </div>
        </div>

        <div className="flex justify-between  items-center mt-2">
          <span className="text-sm text-white/80 font-medium font-sans  -mt-30">{author}</span>
          <button className="bg-white/20 hover:bg-white/30 text-white/70 text-sm px-4 py-2 rounded-full  transition cursor-pointer">
            Read Article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
