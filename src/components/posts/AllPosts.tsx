"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "./utils";
import { Posts } from "@/types/posts";
import { Icons } from "../global/Icons/Icons";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
      {posts?.map((post) => (
        <div key={post.post_id}>
          <img src={post.image_url} alt="" />
        </div>
      ))}
    </div>
  );
};

export { AllPosts };
