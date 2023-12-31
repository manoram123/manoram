export type BlogType = {
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
      name: string;
      username: string;
      profilePicture: string;
    };
    readTimeInMinutes: number;
    views: number;
    tags: Array<{
      name: string;
    }>;
  };
};
