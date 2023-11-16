import { fetchBlog } from "@/helper/fetchBlog";
import { Metadata } from "next";
import React from "react";
import Blogs from "./page";

export const metadata: Metadata = {
  title: "Blogs | Manoram Baudel",
  description: "Recent blog posts.",
};

const Layout = async () => {
  // Fetch data from Hashnode GraphQL API
  const query = `
  query Publication {
    publication(host: "manoram.hashnode.dev") {
      title
      posts(first: 6, filter:{tags:["6555132915caa6554cbf7dd6"]}) {
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

  const blogs = await fetchBlog(query);

  return <Blogs blogs={blogs ? blogs.posts : null} />;
};

export default Layout;
