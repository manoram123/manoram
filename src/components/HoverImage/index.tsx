import { BlogType } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const HoverImage: React.FC<{ blog: BlogType }> = ({ blog }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isHovered) {
      const rect = e.currentTarget.getBoundingClientRect();
      setCursorPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div className="md:flex relative overflow-visible">
      <Link
        href={`/blog/${blog.node.slug}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className="flex items-center justify-between gap-3 md:gap-10 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
      >
        <div className="flex flex-col gap-2 md:flex-row md:gap-12">
          <p className="mt-1">
            {new Date(blog.node.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-base flex-1">{blog.node.title}</p>
        </div>
        <Image
          className="h-28 w-28 object-cover rounded-lg block md:hidden"
          priority
          src={blog.node.coverImage.url}
          height={500}
          width={500}
          alt={blog.node.title}
        />
      </Link>
      {isHovered && (
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={blog.node.coverImage.url}
          className={`h-48 w-62 absolute rounded-md z-10 object-cover hidden md:block`}
          style={{
            transform: `translate(10%, -110%) translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          }}
          alt=""
        />
      )}
    </div>
  );
};

export default HoverImage;
