"use client";
import Image from "next/image";
import ProfileImage from "../../public/images/manoram.jpg";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import { BsMortarboard } from "react-icons/bs";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import TechSkills from "@/components/TechSkills";

export default function Home() {
  const container: Variants = {
    initial: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
    animate: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    initial: { y: 14, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <main className="flex-1">
      <motion.div
        initial="initial"
        animate="animate"
        variants={container}
        className="px-5 md:px-0 md:w-3/5 mx-auto flex flex-col gap-10"
      >
        <motion.div className="mt-32">
          <motion.p
            variants={itemVariants}
            className="text-4xl font-bold tracking-tighter"
          >
            Manoram Baudel
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-neutral-500 dark:text-neutral-400"
          >
            Hello World! I am a software developer and UI designer.
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants} className="flex gap-10">
          <Image
            className="h-24 w-24 rounded-full object-cover"
            width={500}
            height={500}
            src={ProfileImage}
            alt={"profile"}
          />
          <div className="text-neutral-500 dark:text-neutral-400 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <FiMapPin />
              <span>Kathmandu, Nepal</span>
            </p>
            <p className="flex items-center gap-2">
              <BsMortarboard />
              <span>Coventry University, London</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="md:w-2/3 flex flex-col gap-6"
        >
          <p className="leading-normal tracking-wider">
            Hey there, I'm Manoram Baudel. Web development is my passion—I
            thrive on crafting seamless, user-friendly websites that marry
            creativity with cutting-edge tech. I'm all about transforming ideas
            into captivating digital experiences.
          </p>
          <div className="flex gap-6">
            <Link
              href={"mailto:baudelmanoram123@gmail.com"}
              className="flex gap-1 items-center text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors"
            >
              <FiArrowUpRight className="text-lg" /> Email Me
            </Link>

            <Link
              href={"mailto:baudelmanoram123@gmail.com"}
              className="flex gap-1 items-center text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300 transition-colors"
            >
              <FiArrowUpRight className="text-lg" /> More ways to connect
            </Link>
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <TechSkills />
        </motion.div>
      </motion.div>
    </main>
  );
}
