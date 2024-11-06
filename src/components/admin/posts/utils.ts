import { v4 } from "uuid";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { WidgetType } from "./entities";

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

export { onClickAddPost, onClickResetPost };
