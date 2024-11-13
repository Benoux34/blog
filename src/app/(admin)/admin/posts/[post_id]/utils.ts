const getPostById = async (id: string) => {
  const res = await fetch(`/api/posts/get-post-by-id?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();

  if (!posts) return [];

  return posts;
};

export { getPostById };
