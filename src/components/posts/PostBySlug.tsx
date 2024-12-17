"use client";

import { Post } from "@/types/posts";
import { useEffect, useState } from "react";
import { getPostBySlug } from "./utils";
import parse from "html-react-parser";

type Props = {
  slug: string;
};

const PostBySlug = ({ slug }: Props) => {
  const [post, setPost] = useState<Post | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const post = await getPostBySlug(slug);
        setPost(post);
      } catch {
        setPost(undefined);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [slug]);

  return (
    <div className="min-h-screen max-w-[1000px] mx-auto my-20">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold mb-20">{post?.title}</h1>
        <div className="w-full mb-10">
          <img src={post?.image_url} alt={post?.title} />
        </div>
        {post?.content?.map((c, index) => (
          <div key={index} className="mb-4">
            <p>{parse(c.content as string)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { PostBySlug };
