import React from "react";
import AboutClient from "./AboutClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Manoram Baudel",
  description: "Hello World! I am a software developer and UI designer.",
};

const About = () => {
  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <AboutClient />
      </div>
    </div>
  );
};

export default About;
