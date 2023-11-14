import React from "react";
import { motion, Variants } from "framer-motion";
import Manoram from "@/public/images/manoram.jpg";
import Me from "@/public/images/me.jpg";
import View from "@/public/images/view.jpg";
import Friends from "@/public/images/friends.jpg";
import Image from "next/image";
import { animationContainer } from "@/common/constants";

const PhotoGallery = () => {
  const gallery = [
    { name: "manoram", image: Manoram },
    { name: "me", image: Me },
    { name: "view", image: View },
    { name: "friends", image: Friends },
  ];

  const imageAnimationVariant: Variants = {
    initial: { x: -32, opacity: 0, rotate: -24 },
    animate: { x: 0, opacity: 1, rotate: -10 },
  };

  return (
    <motion.div variants={animationContainer} className="flex gap-3">
      {gallery.map((image) => {
        return (
          <motion.div
            variants={imageAnimationVariant}
            whileHover={{ scale: 1.3, zIndex: 1, rotate: 0 }}
            key={image.name}
            className="relative h-54 w-48 rounded-lg overflow-hidden"
          >
            <Image
              className="h-full w-full object-cover"
              height={500}
              width={500}
              src={image.image}
              alt={image.name}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PhotoGallery;
