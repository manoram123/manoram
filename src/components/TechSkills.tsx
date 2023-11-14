import React from "../../public/images/react.png";
import Next from "../../public/images/next.png";
import Node from "../../public/images/node.png";
import Figma from "../../public/images/figma.png";
import Github from "../../public/images/github.png";
import Image from "next/image";

const TechSkills: React.FC = () => {
  const techs = [
    { name: "React", logo: React },
    { name: "Next", logo: Next },
    { name: "Node", logo: Node },
    { name: "Figma", logo: Figma },
    { name: "Github", logo: Github },
  ];
  return (
    <div className="mt-4 flex justify-between flex-wrap gap-14">
      {techs.map((tech) => {
        return (
          <Image
            key={tech.name}
            className="w-24 object-contain dark:invert dark:grayscale"
            src={tech.logo}
            alt={tech.name}
            height={500}
            width={500}
          />
        );
      })}
    </div>
  );
};

export default TechSkills;
