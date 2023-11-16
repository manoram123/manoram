import React from "react";
import BlogClient from "./BlogClient";
import { fetchBlog } from "@/helper/fetchBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Manoram Baudel",
  description: "Recent blog posts.",
};

const page = async () => {
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
  // TODO - fix type error of blog prop
  return (
    <div>
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <BlogClient blogs={blogs?.posts || null} />
      </div>
    </div>
  );
};

export default page;
