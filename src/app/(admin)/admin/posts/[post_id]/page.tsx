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
  console.log("widgets : ", addedWidgets);

  return (
    <div className="relative w-full h-full flex !overflow-hidden">
      <div className="w-full">
        <PostEditor
          addedWidgets={addedWidgets}
          setAddedWidgets={setAddedWidgets}
        />
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <PostWidgets setAddedWidgets={setAddedWidgets} />
      </div>
    </div>
  );
};

export default PostId;
