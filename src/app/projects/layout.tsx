import { fetchBlog } from "@/helper/fetchBlog";
import { Metadata } from "next";
import React from "react";
import Projects from "./page";

export const metadata: Metadata = {
  title: "Projects | Manoram Baudel",
  description: "Skills and Technologies I use as a software developer.",
};

const Layout = async () => {
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
          }
        }
      }
    }
  }
  `;

  const projects = await fetchBlog(query);

  return <Projects projects={projects ? projects.posts : null} />;
};

export default Layout;
