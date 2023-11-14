"use client";
import React from "react";
import { motion } from "framer-motion";
import { animationContainer, animationItemVariants } from "@/common/constants";
import PhotoGallery from "./PhotoGallery";

const AboutClient = () => {
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
          <div className="col-span-2 tracking-wider">
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
      </motion.div>
    </div>
  );
};

export default AboutClient;
