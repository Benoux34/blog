"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "./utils";
import { Posts } from "@/types/posts";
import { Icons } from "../global/Icons/Icons";
import Link from "next/link";

const AllPosts = () => {
  const [posts, setPosts] = useState<Posts | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const allPosts = await getAllPosts();
        setPosts(allPosts);
      } catch {
        setPosts(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return isLoading ? (
    <div className="h-[70vh] flex justify-center items-center">
      <Icons.spinner className="animate-spin" />
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5">
      {posts?.map((post) => (
        <Link
          className="border-x px-8 pt-4"
          href={`/${post.slug}`}
          key={post.post_id}
        >
          <div className="mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
            </div>
          </div>
          <div className="bg-[#F7F7F7] dark:bg-[#333] rounded-lg">
            <img
              className="h-full object-cover"
              src={post.image_url}
              alt={post.title}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export { AllPosts };
