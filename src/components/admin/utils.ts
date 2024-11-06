const getPostsCountById = async (email: string | null | undefined) => {
  if (!email) return;

  try {
    const response = await fetch(
      `/api/posts/get-posts-count-by-id?email=${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("reponse = ", response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { getPostsCountById };
