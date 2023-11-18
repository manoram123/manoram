"use client";
import { animationContainer, animationItemVariants } from "@/common/constants";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import { ProjectType } from "@/types/project";
import Placeholder from "@/public/images/placeholder.jpg";

type ProjectClientProps = {
  projects: Array<ProjectType>;
};

const ProjectsClient: React.FC<ProjectClientProps> = ({ projects }) => {
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
            Projects
          </motion.h1>
          <motion.p
            variants={animationItemVariants}
            className="text-neutral-500 dark:text-neutral-400 md:w-3/5 mt-2"
          >
            Some of the interesting projects that I've had the opportunity to
            work on.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16 md:gap-14">
          {/* My Projects */}
          {projects && projects.length > 0 ? (
            projects.map((project) => {
              return (
                <motion.div
                  key={project.slug}
                  variants={animationItemVariants}
                  className="grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 md:col-span-2 rounded-md overflow-hidden">
                    <Link href={`/projects/${project.slug}`}>
                      <Image
                        className="h-64 md:h-40 object-cover"
                        src={project?.node?.coverImage?.url || Placeholder}
                        priority
                        height={500}
                        width={500}
                        alt={project.slug || ""}
                      />
                    </Link>
                  </div>
                  <div className="col-span-6 md:col-span-4 tracking-wider flex flex-col justify-between gap-2">
                    <p className="text-xl font-bold tracking-tight flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-ellipsis line-clamp-1"
                      >
                        {project.name}
                      </Link>
                      <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                        &#x2022;
                      </span>
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {project.date}
                      </span>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400 line-clamp-2">
                      {project?.node?.brief}
                    </p>
                    <div className="flex gap-3 flex-wrap">
                      {project?.node?.tags &&
                        project.node.tags.map((val, ind) => {
                          return (
                            <div
                              key={ind}
                              className="text-xs capitalize px-2 py-1 text-neutral-500 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-800 rounded-md"
                            >
                              <span>{val.name}</span>
                            </div>
                          );
                        })}
                    </div>
                    <Link
                      className="flex items-center gap-1 hover:gap-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300 transition-all duration-300"
                      href={`/projects/${project.slug}`}
                    >
                      <span>Read More</span>
                      <span>
                        <FiArrowRight />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <p className="italic text-center text-gray-500">
              Sorry! Could not load projects {":("}{" "}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsClient;
