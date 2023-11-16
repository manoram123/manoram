import { fetchSingle } from "@/helper/fetchBlog";
import React from "react";
import BlogDetailsClient from "./BlogDetailsClient";

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
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
          name
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

  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <BlogDetailsClient blog={blog?.post} />
      </div>
    </div>
  );
};

export default BlogDetails;
