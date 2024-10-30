import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MouseEventHandler } from "react";
import { v4 } from "uuid";

const onClickAddPost =
  (
    router: AppRouterInstance
  ): MouseEventHandler<HTMLButtonElement> | undefined =>
  () => {
    const uuid = v4();

    router.push(`/admin/posts/${uuid}`);
  };

export { onClickAddPost };
