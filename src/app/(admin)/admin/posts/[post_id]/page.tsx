"use client";

import { useState } from "react";
import { PostEditor } from "@/components/admin/posts/PostEditor";
import { PostWidgets } from "@/components/admin/posts/PostWidgets";
import { WidgetType } from "@/components/admin/posts/entities";

const PostId = ({ params }: { params: { post_id: string } }) => {
  const post_id = params.post_id;

  const [addedWidgets, setAddedWidgets] = useState<WidgetType>([
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
