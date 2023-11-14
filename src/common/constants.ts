export const VARIANTS = {
  dark: "text-white bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-800",
  light:
    "text-neutral-800 dark:text-neutral-300 hover:bg-gray-100 active:bg-neutral-200 dark:hover:bg-neutral-800",
  danger: "text-white bg-red-500 hover:bg-red-400 active:bg-red-500",
  default: "text-blue-500 hover:text-blue-400",
  link: "text-blue-500 bg-white hover:opacity-80 active:opacity-100",
};

export const animationContainer = {
  initial: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

export const animationItemVariants = {
  initial: { y: 14, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};
