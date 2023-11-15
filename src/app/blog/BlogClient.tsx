"use client";
import { animationContainer, animationItemVariants } from "@/common/constants";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BlogType } from "@/types/blog";

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

        <div className="flex flex-col gap-8">
          {/* My Projects */}
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => {
              return (
                <motion.div
                  key={blog.node.slug}
                  variants={animationItemVariants}
                >
                  <Link
                    href={`/blog/${blog.node.slug}`}
                    className="flex items-center justify-between gap-10 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                  >
                    <div className="flex flex-col gap-2 md:flex-row md:gap-12">
                      <p className="mt-1">
                        {new Date(blog.node.publishedAt).toLocaleDateString(
                          "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
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
