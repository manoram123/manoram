import Image from "next/image";
import ProfileImage from "../../public/images/manoram.jpg";
import { FiMapPin } from "react-icons/fi";
import { BsMortarboard } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex-1">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto flex flex-col gap-10">
        <div className="mt-24">
          <h1 className="text-4xl font-bold tracking-tighter">
            Manoram Baudel
          </h1>
          <p className="text-neutral-500">
            Hello World! I am a software developer and UI designer.
          </p>
        </div>
        <div className="flex gap-10">
          <Image
            className="h-24 w-24 rounded-full object-cover"
            width={500}
            height={500}
            src={ProfileImage}
            alt={"profile"}
          />
          <div className="text-neutral-500 flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <FiMapPin />
              <span>Kathmandu, Nepal</span>
            </p>
            <p className="flex items-center gap-2">
              <BsMortarboard />
              <span>Coventry University, London</span>
            </p>
          </div>
        </div>
        <div className="md:w-2/3">
          <p className="leading-normal tracking-wider">
            Hey there, I'm Manoram Baudel. Web development is my passion—I
            thrive on crafting seamless, user-friendly websites that marry
            creativity with cutting-edge tech. I'm all about transforming ideas
            into captivating digital experiences.
          </p>
        </div>
      </div>
    </main>
  );
}
