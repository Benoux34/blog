"use client";

import { useEffect, useState } from "react";
import { PostEditor } from "@/components/admin/posts/post/PostEditor";
import { PostWidgets } from "@/components/admin/posts/post/PostWidgets";
import { Content } from "@/types/posts";
import { getPostById } from "./utils";
import Loading from "@/app/(admin)/loading";

const PostId = ({ params }: { params: { post_id: string } }) => {
  const post_id = params.post_id;

  const [widgets, setWidgets] = useState<Content>([
    {
      type: "h1",
      content: "",
    },
  ]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPostById(post_id);

      if (result[0]) setWidgets(result[0].content);

      setLoading(false);
    };

    fetchPosts();
  }, [post_id]);

  return loading ? (
    <Loading />
  ) : (
    <div className="relative w-full h-full flex !overflow-hidden">
      <div className="w-full">
        <PostEditor widgets={widgets} setWidgets={setWidgets} />
      </div>
      <PostWidgets postId={post_id} widgets={widgets} setWidgets={setWidgets} />
    </div>
  );
};

export default PostId;
