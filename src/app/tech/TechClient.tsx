"use client";
import { animationContainer, animationItemVariants } from "@/common/constants";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { TbBrandNextjs, TbBrandDjango } from "react-icons/tb";
import { SiTailwindcss, SiMongodb, SiVercel, SiCanva } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsBootstrapFill, BsGithub, BsSlack, BsTrello } from "react-icons/bs";

const TechClient = () => {
  const techs = {
    frontend: [
      { name: "React", icon: <FaReact />, link: "https://reactjs.com" },
      { name: "Next.js", icon: <TbBrandNextjs />, link: "https://nextjs.org" },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss />,
        link: "https://tailwindcss.com/",
      },
      {
        name: "Bootstrap",
        icon: <BsBootstrapFill />,
        link: "https://getbootstrap.com/",
      },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs />, link: "https://nodejs.org/en/" },
      {
        name: "Django",
        icon: <TbBrandDjango />,
        link: "https://www.djangoproject.com/",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        link: "https://www.mongodb.com/",
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql />,
        link: "https://www.postgresql.org/",
      },
    ],
    version: [
      { name: "Github", icon: <BsGithub />, link: "https://github.com/" },
      { name: "Vercel", icon: <SiVercel />, link: "https://vercel.com/" },
    ],
    design: [
      { name: "Figma", icon: <FaFigma />, link: "https://figma.com/" },
      { name: "Canva", icon: <SiCanva />, link: "https://canva.com/" },
    ],
    collaboration: [
      { name: "Slack", icon: <BsSlack />, link: "https://slack.com/" },
      { name: "Trello", icon: <BsTrello />, link: "https://trello.com/" },
    ],
  };
  return (
    <div className="mt-16 md:mt-24">
      <motion.div
        className="flex flex-col gap-20"
        initial="initial"
        animate="animate"
        variants={animationContainer}
      >
        <div>
          <motion.h1
            variants={animationItemVariants}
            className="text-3xl md:text-4xl font-bold tracking-tighter"
          >
            Technologies
          </motion.h1>
          <motion.p
            variants={animationItemVariants}
            className="text-neutral-500 dark:text-neutral-400 md:w-3/5 mt-2"
          >
            These are the technologies I am using as a software developer –
            where code meets capability, and creativity meets functionality.
          </motion.p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Frontend Technologies */}
          <motion.div
            variants={animationItemVariants}
            className="grid grid-cols-4 gap-3"
          >
            <p className="col-span-4 md:col-span-1 text-neutral-500 text-lg md:text-sm">
              Frontend
            </p>
            <div className="col-span-4 md:col-span-2 tracking-wider flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {techs.frontend.map((val) => {
                  return (
                    <Link
                      key={val.name}
                      href={val.link}
                      target="_blank"
                      className="flex items-center gap-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border dark:border-neutral-800 px-4 py-4"
                    >
                      <span className="text-xl">{val.icon}</span>
                      <span>{val.name}</span>
                      <span className="ms-auto">
                        <FiArrowUpRight className="text-lg" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Backend Technologies */}
          <motion.div
            variants={animationItemVariants}
            className="grid grid-cols-4 gap-3"
          >
            <p className="col-span-4 md:col-span-1 text-neutral-500 text-lg md:text-sm">
              Backend
            </p>
            <div className="col-span-4 md:col-span-2 tracking-wider flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {techs.backend.map((val) => {
                  return (
                    <Link
                      key={val.name}
                      href={val.link}
                      target="_blank"
                      className="flex items-center gap-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border dark:border-neutral-800 px-4 py-4"
                    >
                      <span className="text-xl">{val.icon}</span>
                      <span>{val.name}</span>
                      <span className="ms-auto">
                        <FiArrowUpRight className="text-lg" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Version Control & Deployment */}
          <motion.div
            variants={animationItemVariants}
            className="grid grid-cols-4 gap-3"
          >
            <p className="col-span-4 md:col-span-1 text-neutral-500 text-lg md:text-sm">
              Version Control & Deployment
            </p>
            <div className="col-span-4 md:col-span-2 tracking-wider flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {techs.version.map((val) => {
                  return (
                    <Link
                      key={val.name}
                      href={val.link}
                      target="_blank"
                      className="flex items-center gap-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border dark:border-neutral-800 px-4 py-4"
                    >
                      <span className="text-xl">{val.icon}</span>
                      <span>{val.name}</span>
                      <span className="ms-auto">
                        <FiArrowUpRight className="text-lg" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Design & Prototyping */}
          <motion.div
            variants={animationItemVariants}
            className="grid grid-cols-4 gap-3"
          >
            <p className="col-span-4 md:col-span-1 text-neutral-500 text-lg md:text-sm">
              Design & Prototyping
            </p>
            <div className="col-span-4 md:col-span-2 tracking-wider flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {techs.design.map((val) => {
                  return (
                    <Link
                      key={val.name}
                      href={val.link}
                      target="_blank"
                      className="flex items-center gap-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border dark:border-neutral-800 px-4 py-4"
                    >
                      <span className="text-xl">{val.icon}</span>
                      <span>{val.name}</span>
                      <span className="ms-auto">
                        <FiArrowUpRight className="text-lg" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Collaboration */}
          <motion.div
            variants={animationItemVariants}
            className="grid grid-cols-4 gap-3"
          >
            <p className="col-span-4 md:col-span-1 text-neutral-500 text-lg md:text-sm">
              Collaboration
            </p>
            <div className="col-span-4 md:col-span-2 tracking-wider flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {techs.collaboration.map((val) => {
                  return (
                    <Link
                      key={val.name}
                      href={val.link}
                      target="_blank"
                      className="flex items-center gap-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border dark:border-neutral-800 px-4 py-4"
                    >
                      <span className="text-xl">{val.icon}</span>
                      <span>{val.name}</span>
                      <span className="ms-auto">
                        <FiArrowUpRight className="text-lg" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TechClient;
