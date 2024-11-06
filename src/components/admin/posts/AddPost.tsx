"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { onClickAddPost } from "./utils";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getPostsCountById } from "../utils";

const AddPost = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/sign-in");

  const postsCount = getPostsCountById(session?.user?.email);
  console.log(postsCount);

  const handleAddPost = onClickAddPost(router);

  return Number(postsCount) !== 0 ? (
    <Button
      onClick={handleAddPost}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      variant={"outline"}
    >
      Create your first post
    </Button>
  ) : (
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
