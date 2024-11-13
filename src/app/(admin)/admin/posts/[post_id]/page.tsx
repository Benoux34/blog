"use client";

import { useState } from "react";
import { PostEditor } from "@/components/admin/posts/post/PostEditor";
import { PostWidgets } from "@/components/admin/posts/post/PostWidgets";
import { Content } from "@/types/posts";

const PostId = ({ params }: { params: { post_id: string } }) => {
  const post_id = params.post_id;

  const [addedWidgets, setAddedWidgets] = useState<Content>([
    {
      type: "H1",
      content: "",
    },
  ]);

  return (
    <div className="relative w-full h-full flex !overflow-hidden">
      <div className="w-full">
        <PostEditor
          addedWidgets={addedWidgets}
          setAddedWidgets={setAddedWidgets}
        />
      </div>
      <PostWidgets
        postId={post_id}
        addedWidgets={addedWidgets}
        setAddedWidgets={setAddedWidgets}
      />
    </div>
  );
};

export default PostId;
