"use client";

import Loading from "../../loading";
import { AddPost } from "@/components/admin/posts/AddPost";
import { PostsByAuthor } from "@/components/admin/posts/PostsByAuthor";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const Posts = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated" && !session) redirect("/sign-in");

  const author = session?.user?.email;
  if (!author) redirect("/sign-in");

  return (
    <div className="relative h-full w-full">
      <Suspense fallback={<Loading />}>
        <PostsByAuthor author={author} />
      </Suspense>
      <AddPost />
    </div>
  );
};

export default Posts;
