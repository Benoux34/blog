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

const onClickDeleteImage =
  (
    post_id: string,
    public_id: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    router: AppRouterInstance
  ): MouseEventHandler<SVGSVGElement> =>
  async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `/api/posts/delete-image?post_id=${post_id}&public_id=${public_id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }
    } catch (error) {
      console.error("Error fetching posts by author:", error);
    } finally {
      toast({ title: "Image Delete" });
      setLoading(false);
      router.refresh();
    }
  };

export { onClickSave, onClickResetPost, onClickDeletePost, onClickDeleteImage };
