"use client";
import React from "react";
import { motion } from "framer-motion";
import { animationContainer, animationItemVariants } from "@/common/constants";
import { BlogType } from "@/types/blog";
import Link from "next/link";
import { FiArrowUpRight, FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
type ProjectType = {
  name: string;
  slug: string;
  link: string;
  date: string;
};

type ProjectDetailClientProps = {
  project?: ProjectType;
  blog?: BlogType;
};

const ProjectDetailsClient: React.FC<ProjectDetailClientProps> = ({
  project,
  blog,
}) => {
  const router = useRouter();

  return (
    <div className="mt-16 md:mt-24">
      <motion.div
        className="flex flex-col gap-24"
        initial="initial"
        animate="animate"
        variants={animationContainer}
      >
        {project && (
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-3">
              <motion.p
                variants={animationItemVariants}
                className="text-base flex items-center gap-2"
              >
                <span>{project.date}</span>
                <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                  &#x2022;
                </span>
                <Link
                  href={project.link}
                  target="_blank"
                  className="text-sm flex items-center gap-1 text-neutral-500 dark:text-neutral hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
                >
                  <span>
                    <FiArrowUpRight className="text-lg" />
                  </span>
                  <span>Visit Project</span>
                </Link>
              </motion.p>
              <motion.h1
                variants={animationItemVariants}
                className="text-3xl md:text-4xl font-bold tracking-tighter"
              >
                {project.name}
              </motion.h1>
            </div>
            {blog?.node ? (
              <div className="flex flex-col gap-14">
                <motion.div
                  variants={animationItemVariants}
                  className="text-lg content"
                >
                  <Markdown>
                    {blog.node.content.markdown
                      .replace(/align="center"/g, "")
                      .replace(/align="left"/g, "")
                      .replace(/align="right"/g, "")}
                  </Markdown>
                  {/* <ReactMarkdown remarkPlugins={[gfm]}>
                    {blog.node.content.markdown}
                  </ReactMarkdown> */}
                </motion.div>

                <motion.div variants={animationItemVariants}>
                  <p className="mb-6">Tags</p>
                  <div className="flex gap-3 flex-wrap">
                    {blog.node.tags.map((val, ind) => {
                      return (
                        <div
                          key={ind}
                          className="px-3 py-2 text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 rounded-lg"
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
          </div>
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

export default ProjectDetailsClient;
