import { Posts } from "@/types/posts";

const getAllPosts = async (): Promise<Posts | undefined> => {
  try {
    const res = await fetch(`/api/posts/get-all-posts`);

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    if (res.status === 208) return undefined;

    const posts: Posts = await res.json();

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return undefined;
  }
};

export { getAllPosts };
