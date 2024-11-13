import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { getSlug } from "@/lib/get-slug";
import { toast } from "@/hooks/use-toast";
import { Content } from "@/types/posts";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const onClickSave =
  (
    post_id: string,
    content: Content,
    author_id: string | null | undefined
  ): MouseEventHandler<HTMLButtonElement> | undefined =>
  async () => {
    if (!author_id) return;

    const title = content[0].content as string;
    const slug = getSlug(title);

    const response = await fetch(`/api/posts/save-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id, title, slug, content, author_id }),
    });

    if (response.ok === true) toast({ title: "Post saved!" });
    else toast({ title: "Failed!", variant: "destructive" });
  };

const onClickResetPost =
  (setAddedWidgets: Dispatch<SetStateAction<Content>>) => () => {
    setAddedWidgets([
      {
        type: "H1",
        content: "",
      },
    ]);
    toast({ title: "Post has been reset!" });
  };

const onClickDeletePost =
  (
    post_id: string,
    router: AppRouterInstance
  ): MouseEventHandler<HTMLButtonElement> =>
  async () => {
    try {
      const res = await fetch(`/api/posts/delete-post-by-id?id=${post_id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }

      router.push("/admin/posts");
      toast({ title: "Post Delete" });
    } catch (error) {
      console.error("Error fetching posts by author:", error);
    }
  };

export { onClickSave, onClickResetPost, onClickDeletePost };
