import { Post } from "@/types/posts";

const getPostById = async (id: string): Promise<Post | null> => {
  const res = await fetch(`/api/posts/get-post-by-id?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts: Post = await res.json();
  console.log(posts);

  if (!posts) return null;

  return posts;
};

export { getPostById };
