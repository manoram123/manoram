"use client";
import * as React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Example: React.FC = () => (
  <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {[0, 1, 2, 3].map((index) => (
      <motion.li key={index} className="item" variants={item} />
    ))}
  </motion.ul>
);

export default Example;
