import { v4 } from "uuid";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { WidgetType } from "./entities";

const onClickSave =
  (
    post_id: string,
    content: WidgetType,
    author_id: string | null | undefined
  ): MouseEventHandler<HTMLButtonElement> | undefined =>
  async () => {
    if (!author_id) return;

    const response = await fetch(`/api/posts/save-post`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post_id, content, author_id }),
    });
    return response;
  };

const onClickAddPost =
  (
    router: AppRouterInstance
  ): MouseEventHandler<HTMLButtonElement> | undefined =>
  () => {
    const uuid = v4();

    router.push(`/admin/posts/${uuid}`);
  };

const onClickResetPost =
  (setAddedWidgets: Dispatch<SetStateAction<WidgetType>>) => () => {
    setAddedWidgets([
      {
        type: "H1",
        content: "",
      },
    ]);
  };

export { onClickSave, onClickAddPost, onClickResetPost };
