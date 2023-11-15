import { BlogType } from "@/types/blog";
import BlogClient from "./BlogClient";

type BlogProps = {
  blogs: Array<BlogType>;
};

const Blogs = ({ blogs }: BlogProps) => {
  return (
    <div className="">
      <div className="px-5 md:px-0 md:w-3/5 mx-auto">
        <BlogClient blogs={blogs} />
      </div>
    </div>
  );
};

export default Blogs;
