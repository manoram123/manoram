import { PROJECTS } from "@/common/projects";
import { fetchSingle } from "@/helper/fetchBlog";
import React from "react";
import ProjectDetailsClient from "./ProjectDetailsClient";

const ProjectDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch data from Hashnode GraphQL API
  const query = `
  query Publication {
    publication(host: "manoram.hashnode.dev") {
      post(slug:"${slug}"){
        title
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
        tags {
          name
        }
      } 
    }
  }
  `;

  const blog = await fetchSingle(query);
  const project = PROJECTS.find((project) => project.slug === slug);

  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <ProjectDetailsClient blog={blog?.post} project={project} />
      </div>
    </div>
  );
};

export default ProjectDetails;
