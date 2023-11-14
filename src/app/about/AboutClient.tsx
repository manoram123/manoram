"use client";
import React from "react";
import { motion } from "framer-motion";
import { animationContainer, animationItemVariants } from "@/common/constants";
import PhotoGallery from "./PhotoGallery";

import Appharu from "@/public/appharu.svg";
import Stockinerary from "@/public/stockinerary.svg";
import TechHimalaya from "@/public/tech-himalaya.svg";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import {
  BsEnvelopeAtFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import Link from "next/link";

const AboutClient = () => {
  const works = [
    {
      name: "Appharu",
      image: Appharu,
      position: "Full-Stack Developer",
      duration: "2022 - Present",
    },
    {
      name: "Stockinerary",
      image: Stockinerary,
      position: "React Native Developer",
      duration: "2023 - Present",
    },
    {
      name: "Tech Himalaya",
      image: TechHimalaya,
      position: "React | NextJS Developer",
      duration: "2021 - 2022",
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      link: "mailto:baudelmanoram123@gmail.com",
      icon: <BsEnvelopeAtFill />,
    },
    {
      name: "Github",
      link: "https://github.com/manoram123",
      icon: <BsGithub />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/manoram-baudel-6158b91b9/",
      icon: <BsLinkedin />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/manoram_baudel/",
      icon: <BsInstagram />,
    },
  ];

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
            About Me
          </motion.h1>
          <motion.p
            variants={animationItemVariants}
            className="text-neutral-500 dark:text-neutral-400"
          >
            Hello World! I am a software developer and UI designer.
          </motion.p>
        </div>

        <PhotoGallery />

        <motion.div
          variants={animationItemVariants}
          className="grid grid-cols-4"
        >
          <p className="col-span-1 text-neutral-500">About</p>
          <div className="col-span-3 md:col-span-2 tracking-wider">
            <p className="">
              I'm a dedicated web developer, passionate about creating polished
              websites using cutting-edge technologies. During work hours, I
              focus on seamlessly blending creativity and technical precision.
              My approach reflects a commitment to excellence in both the
              digital and personal spheres.
            </p>
            <p className="mt-3">
              Off-duty, you'll find me strategically navigating video games or
              refining my discipline through music practice.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={animationItemVariants}
          className="grid grid-cols-4"
        >
          <p className="col-span-1 text-neutral-500">Work</p>
          <div className="col-span-3 md:col-span-2 tracking-wider flex flex-col gap-6">
            <p className="">
              Over my web development journey across various companies, I've
              honed my skills in creating dynamic and user-friendly websites,
              adapting to diverse tech stacks and contributing to the success of
              each team I've been a part of.
            </p>
            {works.map((work, ind) => {
              return (
                <div key={ind} className="flex gap-3 items-center">
                  <div className="flex items-center justify-center border dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 rounded-lg h-14 w-14">
                    <Image
                      className="object-cover saturate-200"
                      src={work.image}
                      height={42}
                      width={42}
                      alt={work.name}
                    />
                  </div>
                  <div className="flex flex-1 flex-col md:flex-row justify-between gap-1">
                    <div className="flex flex-col gap-1">
                      <p>{work.position}</p>
                      <p className="text-neutral-500">{work.name}</p>
                    </div>
                    <div>
                      <p className="text-neutral-500 md:text-end">
                        {work.duration}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={animationItemVariants}
          className="grid grid-cols-4"
        >
          <p className="col-span-1 text-neutral-500">Connect</p>
          <div className="col-span-3 md:col-span-2 tracking-wider flex flex-col gap-6">
            <p>
              Feel free to contact me via my social media links. I appreciate
              your outreach.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((val) => {
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
      </motion.div>
    </div>
  );
};

export default AboutClient;
