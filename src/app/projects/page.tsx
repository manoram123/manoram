import React from "react";
import ProjectsClient from "./ProjectsClient";
import { PROJECTS } from "@/common/projects";
import { ProjectType } from "@/types/project";
import { fetchBlog } from "@/helper/fetchBlog";
import { Metadata } from "next";
import { BlogType } from "@/types/blog";

export const metadata: Metadata = {
  title: "Projects | Manoram Baudel",
  description: "Skills and Technologies I use as a software developer.",
};

const Projects = async () => {
  // Fetch data from Hashnode GraphQL API
  const query = `
  query Publication {
    publication(host: "manoram.hashnode.dev") {
      title
      posts(first: 10, filter:{tags:["56744722958ef13879b95074"]}) {
        edges {
          node {
            title
            slug
            brief
            content {
                markdown
            }
            publishedAt          
            coverImage {
                url
            }
            author {
              username
              profilePicture
            }
            readTimeInMinutes
            views
            tags {
              name
            }
          }
        }
      }
    }
  }
  `;

  const projects = await fetchBlog(query);

  const updatedProjects: Array<ProjectType> = PROJECTS.map((val) => {
    const projectBlog = projects?.posts.find(
      (project: BlogType) => project.node.slug === val.slug
    );
    return { ...val, node: { ...projectBlog?.node } };
  });

  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <ProjectsClient projects={updatedProjects} />
      </div>
    </div>
  );
};

export default Projects;
