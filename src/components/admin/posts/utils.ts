import { v4 } from "uuid";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MouseEventHandler } from "react";

const onClickAddPost =
  (
    router: AppRouterInstance
  ): MouseEventHandler<HTMLButtonElement> | undefined =>
  () => {
    const uuid = v4();

    router.push(`/admin/posts/${uuid}`);
  };

const getPostsByAuthor = async (author: string) => {
  try {
    const res = await fetch(`/api/posts/get-posts-by-author?author=${author}`);

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const posts = await res.json();

    return posts;
  } catch (error) {
    console.error("Error fetching posts by author:", error);
    return [];
  }
};

export { onClickAddPost, getPostsByAuthor };
