import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { getSlug } from "@/lib/get-slug";
import { toast } from "@/hooks/use-toast";
import { Content } from "@/types/posts";

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

export { onClickSave, onClickResetPost };
