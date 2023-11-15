"use client";
import { animationContainer, animationItemVariants } from "@/common/constants";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { TbBrandNextjs, TbBrandDjango } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiVercel, SiCanva } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsBootstrapFill, BsGithub, BsSlack, BsTrello } from "react-icons/bs";
import Image from "next/image";
import { BlogType } from "@/types/blog";

type ProjectClientProps = {
  projects: Array<BlogType>;
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
            I have included some of my projects I am currently working on or
            haved developed in the past.
          </motion.p>
        </div>

        <div className="flex flex-col gap-10">
          {/* My Projects */}
          {projects && projects.length > 0 ? (
            projects.map((project) => {
              return (
                <motion.div
                  key={project.node.slug}
                  variants={animationItemVariants}
                  className="grid grid-cols-6 gap-6"
                >
                  <div className="col-span-6 md:col-span-2 rounded-md overflow-hidden">
                    <Image
                      className="h-40 object-cover"
                      src={project.node.coverImage.url}
                      priority
                      height={500}
                      width={500}
                      alt={project.node.title}
                    />
                  </div>
                  <div className="col-span-6 md:col-span-4 tracking-wider flex flex-col gap-2">
                    <p className="text-xl font-bold tracking-tight flex items-center gap-2">
                      {project.node.title}{" "}
                      <span className="text-neutral-500 dark:text-neutral-400 text-xs">
                        &#x2022;
                      </span>{" "}
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {new Date(project.node.publishedAt).getFullYear()}
                      </span>
                    </p>
                    <p className="text-neutral-500 dark:text-neutral-400">
                      {project.node.brief}
                    </p>
                    <Link
                      className="mt-2 flex items-center gap-1 hover:gap-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300 transition-all duration-300"
                      href={`/project/${project.node.slug}`}
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