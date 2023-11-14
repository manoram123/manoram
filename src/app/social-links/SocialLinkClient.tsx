"use client";
import React from "react";
import { motion } from "framer-motion";
import { animationContainer, animationItemVariants } from "@/common/constants";
import Image from "next/image";
import ProfileImage from "@/public/images/manoram.jpg";
import Link from "next/link";

import { FiArrowUpRight } from "react-icons/fi";
import {
  BsEnvelopeAtFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";

const SocialLinkClient = () => {
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
    <div className="grid grid-cols-1 gap-3 px-5 md:px-0 md:w-2/5 mt-16 md:mt-24">
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationContainer}
        className="flex flex-col gap-12"
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div variants={animationItemVariants}>
            <Image
              className="h-24 w-24 rounded-full object-cover"
              width={500}
              height={500}
              src={ProfileImage}
              alt={"profile"}
            />
          </motion.div>
          <motion.p
            variants={animationItemVariants}
            className="text-3xl md:text-4xl text-center font-bold tracking-tighter"
          >
            Manoram Baudel
          </motion.p>
          <motion.div variants={animationItemVariants} className="md:w-2/3">
            <p className="leading-normal tracking-wider text-center px-3 md:px-0">
              Hey there, I'm Manoram Baudel. Web development is my passion—I
              thrive on crafting seamless, user-friendly websites that marry
              creativity with cutting-edge tech. I'm all about transforming
              ideas into captivating digital experiences.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-col gap-3">
          {socialLinks.map((val) => {
            return (
              <motion.div key={val.name} variants={animationItemVariants}>
                <Link
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
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinkClient;
