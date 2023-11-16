// Fetch data from Hashnode GraphQL API
export const fetchBlog = async (query: string) => {
  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });
    const { data } = await response.json();
    return {
      publication: data.publication.title,
      posts: data.publication.posts.edges,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingle = async (query: string) => {
  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    });
    const { data } = await response.json();
    return {
      post: { node: data.publication.post },
    };
  } catch (error) {
    console.log(error);
  }
};
