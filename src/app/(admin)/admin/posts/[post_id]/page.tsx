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
      content: "",
    },
  ]);
  console.log("widgets : ", addedWidgets);

  return (
    <div className="w-full h-full flex !overflow-hidden">
      <div className="w-full max-h-[100vh] overflow-y-scroll pr-32">
        <PostEditor
          addedWidgets={addedWidgets}
          setAddedWidgets={setAddedWidgets}
        />
      </div>
      {/* <PostWidgets setAddedWidgets={setAddedWidgets} /> */}
    </div>
  );
};

export default PostId;
