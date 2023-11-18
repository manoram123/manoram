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
    { name: "manoram", image: Manoram, rotation: -5 },
    { name: "me", image: Me, rotation: 10 },
    { name: "view", image: View, rotation: -10 },
    { name: "friends", image: Friends, rotation: -20 },
  ];

  const imageAnimationVariant: Variants = {
    initial: { x: -32, opacity: 0, rotate: -24 },
    animate: { x: 0, opacity: 1, rotate: -10 },
  };

  return (
    <motion.div variants={animationContainer} className="flex gap-3">
      {gallery.map((image, ind) => {
        return (
          <motion.div
            variants={{
              initial: { x: -32, opacity: 0, rotate: image.rotation - 10 },
              animate: { x: 0, opacity: 1, rotate: image.rotation },
            }}
            whileHover={{ scale: 1.3, zIndex: 1, rotate: 0 }}
            key={image.name}
            className={`relative h-54 w-48 rounded-lg overflow-hidden ${
              ind === 0 || (ind === 1 && "hidden md:block")
            }`}
          >
            <Image
              className="h-full w-full object-cover"
              height={500}
              width={500}
              src={image.image}
              alt={image.name}
              quality={90}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default PhotoGallery;
