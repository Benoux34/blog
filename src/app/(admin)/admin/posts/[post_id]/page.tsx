"use client";

import { useEffect, useState } from "react";
import { PostEditor } from "@/components/admin/posts/post/PostEditor";
import { PostWidgets } from "@/components/admin/posts/post/PostWidgets";
import { Content, ImagePost } from "@/types/posts";
import { getPostById } from "./utils";
import Loading from "@/app/(admin)/loading";
import { toast } from "@/hooks/use-toast";

const PostId = ({ params }: { params: { post_id: string } }) => {
  const post_id = params.post_id;

  const [widgets, setWidgets] = useState<Content>([
    {
      type: "h1",
      content: "",
    },
  ]);
  const [loading, setLoading] = useState<boolean>(true);
  const [image, setImage] = useState<ImagePost>();

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getPostById(post_id);

      if (result) {
        setWidgets(result.content || []);
        setImage({
          url: result.image_url || "",
          public_id: result.image_public_id || "",
        });
      } else {
        toast({ title: "No post found for the given ID." });
      }

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
      <PostWidgets
        postId={post_id}
        widgets={widgets}
        setWidgets={setWidgets}
        image={image}
        setImage={setImage}
      />
    </div>
  );
};

export default PostId;
