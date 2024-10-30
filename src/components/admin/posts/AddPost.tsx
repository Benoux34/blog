"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { onClickAddPost } from "./utils";
import { useRouter } from "next/navigation";

const AddPost = () => {
  const router = useRouter();

  const handleAddPost = onClickAddPost(router);

  return (
    <Button
      onClick={handleAddPost}
      className="fixed bottom-5 right-5 h-12 w-12"
      variant={"outline"}
    >
      <Plus className="!h-6 !w-6" />
    </Button>
  );
};

export { AddPost };
