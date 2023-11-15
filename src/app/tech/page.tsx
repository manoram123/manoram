import { Metadata } from "next";
import React from "react";
import TechClient from "./TechClient";

export const metadata: Metadata = {
  title: "Technologies | Manoram Baudel",
  description: "Skills and Technologies I use as a software developer.",
};

const Techs = () => {
  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <TechClient />
      </div>
    </div>
  );
};

export default Techs;
