import React from "react";
import BlogClient from "./BlogClient";

const Blog = ({ blogs }: { blogs: any }) => {
  //TODO - Fix type error for blogs
  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <BlogClient blogs={blogs} />
      </div>
    </div>
  );
};

export default Blog;
