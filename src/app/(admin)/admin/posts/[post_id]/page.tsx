"use client";

import { PostEditor } from "@/components/admin/posts/PostEditor";
import { PostWidgets } from "@/components/admin/posts/PostWidgets";
import { WidgetType } from "@/components/admin/posts/entities";
import { useState } from "react";

const PostId = ({ params }: { params: { post_id: string } }) => {
  const post_id = params.post_id;
  console.log(post_id);

  const [addedWidgets, setAddedWidgets] = useState<WidgetType>([
    {
      type: "H1",
    },
  ]);
  console.log(addedWidgets);

  return (
    <div className="w-full h-full flex">
      <div className="w-[75%] h-full">
        <PostEditor />
      </div>
      <div className="w-[50%] lg:w-[25%] h-full">
        <PostWidgets setAddedWidgets={setAddedWidgets} />
      </div>
    </div>
  );
};

export default PostId;
