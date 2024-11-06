"use client";

import { useState } from "react";
import { PostEditor } from "@/components/admin/posts/PostEditor";
import { PostWidgets } from "@/components/admin/posts/PostWidgets";
import { WidgetType } from "@/components/admin/posts/entities";

const PostId = ({ params }: { params: { post_id: string } }) => {
  const post_id = params.post_id;
  console.log(post_id);

  const [addedWidgets, setAddedWidgets] = useState<WidgetType>([
    {
      type: "H1",
      content: "",
    },
  ]);
  console.log(addedWidgets);

  return (
    <div className="relative w-full h-full flex !overflow-hidden">
      <div className="w-full">
        <PostEditor
          addedWidgets={addedWidgets}
          setAddedWidgets={setAddedWidgets}
        />
      </div>
      <PostWidgets setAddedWidgets={setAddedWidgets} />
    </div>
  );
};

export default PostId;
