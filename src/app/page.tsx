import { fetchBlog } from "@/helper/fetchBlog";
import React from "react";
import HomeClient from "./HomeClient";

const Home = async () => {
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
  return <HomeClient blogs={blogs?.posts} />;
};

export default Home;
