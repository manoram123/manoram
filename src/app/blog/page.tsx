import { BlogType } from "@/types/blog";
import BlogClient from "./BlogClient";

const Blogs = ({ blogs }: { blogs: Array<BlogType> }) => {
  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <BlogClient blogs={blogs} />
      </div>
    </div>
  );
};

export default Blogs;
