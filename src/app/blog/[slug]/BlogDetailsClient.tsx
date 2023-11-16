"use client";
import React from "react";
import { motion } from "framer-motion";
import { animationContainer, animationItemVariants } from "@/common/constants";
import { BlogType } from "@/types/blog";
import { FiBook, FiChevronLeft } from "react-icons/fi";
import Markdown from "react-markdown";
import { useRouter } from "next/navigation";
import Image from "next/image";

type BlogDetailsClientProps = {
  blog?: BlogType;
};

const BlogDetailsClient: React.FC<BlogDetailsClientProps> = ({ blog }) => {
  const router = useRouter();
  return (
    <div className="mt-16 md:mt-24">
      <motion.div
        className="flex flex-col gap-24"
        initial="initial"
        animate="animate"
        variants={animationContainer}
      >
        {blog?.node ? (
          <div className="flex flex-col gap-14">
            <motion.div
              variants={animationItemVariants}
              className="flex flex-col gap-6"
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                {blog.node.title}
              </h1>
              <div className="flex gap-2 items-stretch">
                <Image
                  className="h-10 w-10 rounded-full"
                  height={500}
                  width={500}
                  src={blog.node.author.profilePicture}
                  alt={blog.node.author.username}
                />
                <div>
                  <p>{blog.node.author.name}</p>
                  <p className="text-neutral-500 flex items-center gap-2">
                    <span>
                      {new Date(blog.node.publishedAt).toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "short", day: "numeric" }
                      )}
                    </span>
                    <span>&#x2022;</span>
                    <FiBook />
                    <span>{blog.node.readTimeInMinutes} min read</span>
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={animationItemVariants}>
              <Markdown>{blog.node.content.markdown}</Markdown>
            </motion.div>

            <motion.div variants={animationItemVariants}>
              <p className="mb-6">Tags</p>
              <div className="flex gap-3 flex-wrap">
                {blog.node.tags.map((val, ind) => {
                  return (
                    <div
                      key={ind}
                      className="px-3 py-2 text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-900 rounded-lg"
                    >
                      <span>{val.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        ) : (
          <motion.p
            variants={animationItemVariants}
            className="italic text-neutral-400 dark:text-neutral-600"
          >
            No contents to show {":("}
          </motion.p>
        )}
        <motion.div variants={animationItemVariants}>
          <button
            onClick={() => router.back()}
            className="flex gap-1 items-center hover:gap-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-300 transition-all"
          >
            <span>
              <FiChevronLeft className="text-lg" />
            </span>
            <span>Go Back</span>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogDetailsClient;
