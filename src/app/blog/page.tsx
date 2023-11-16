import BlogClient from "./BlogClient";

type BlogType = {
  node: {
    title: string;
    slug: string;
    brief: string;
    content: { markdown: string };
    publishedAt: Date;
    coverImage: {
      url: string;
    };
    author: {
      username: string;
      profilePicture: string;
    };
    readTimeInMinutes: number;
    views: number;
  };
};

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
