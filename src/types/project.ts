export type ProjectType = {
  name: string;
  date: string;
  link: string;
  slug: string;
  node?: {
    title?: string;
    slug?: string;
    brief?: string;
    content?: { markdown: string };
    publishedAt?: Date;
    coverImage?: {
      url?: string;
    };
    author?: {
      username?: string;
      profilePicture?: string;
    };
    readTimeInMinutes?: number;
    views?: number;
  };
};
