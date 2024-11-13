"use client";

import Link from "next/link";
import { getPostsByAuthor } from "./utils";
import { useEffect, useState } from "react";
import { Posts } from "@/types/posts";
import { Icons } from "@/components/global/Icons/Icons";

type Props = {
  author: string;
};

const PostsByAuthor = ({ author }: Props) => {
  const [posts, setPosts] = useState<Posts>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPostsByAuthor(author);
        setPosts(posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [author]);

  return loading ? (
    <div className="h-full flex justify-center items-center">
      <Icons.spinner className="animate-spin" />
    </div>
  ) : (
    <div>
      <div>
        <h1 className="text-center text-xl md:text-2xl font-semibold mt-5 mb-10">
          All your posts
        </h1>
      </div>
      <div className="flex flex-col">
        {posts?.map((post) => {
          return (
            <Link
              href={`/admin/posts/${post.post_id}`}
              key={post.post_id}
              className="border-b py-4 px-3"
            >
              <h2 className="text-md md:text-lg">{post.title}</h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export { PostsByAuthor };
