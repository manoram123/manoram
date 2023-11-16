import React from "react";
import BlogClient from "./BlogClient";

const page = ({ blogs }: any) => {
  // TODO - fix type error of blog prop
  return (
    <div>
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <BlogClient blogs={blogs} />
      </div>
    </div>
  );
};

export default page;
