import { Metadata } from "next";
import React from "react";
import ProjectsClient from "./ProjectsClient";
import { BlogType } from "@/types/blog";

type ProjectProps = {
  projects: Array<BlogType>;
};

const Projects: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <ProjectsClient projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
