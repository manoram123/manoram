"use client";
import { animationContainer, animationItemVariants } from "@/common/constants";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogType } from "@/types/blog";
import HoverImage from "@/components/HoverImage";

type BlogClientProps = {
  blogs: Array<BlogType>;
};

const BlogClient: React.FC<BlogClientProps> = ({ blogs }) => {
  return (
    <div className="mt-16 md:mt-24">
      <motion.div
        className="flex flex-col gap-24"
        initial="initial"
        animate="animate"
        variants={animationContainer}
      >
        <div>
          <motion.h1
            variants={animationItemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={animationItemVariants}
            className="text-neutral-500 dark:text-neutral-400 md:w-3/5 mt-2"
          >
            My recent blog related to web development and coding
          </motion.p>
        </div>

        <div className="flex flex-col gap-8 relative">
          {/* My Projects */}
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <motion.div
                  key={blog.node.slug}
                  variants={animationItemVariants}
                >
                  <HoverImage blog={blog} />
                </motion.div>
              );
            })
          ) : (
            <p className="italic text-center text-gray-500">
              Sorry! Could not load blogs {":("}{" "}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogClient;
