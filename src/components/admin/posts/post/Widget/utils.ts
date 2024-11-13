import { Content } from "@/types/posts";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

const onClickAddWidget =
  (
    type: string,
    setWidgets: Dispatch<SetStateAction<Content>>
  ): MouseEventHandler<HTMLDivElement> | undefined =>
  () => {
    setWidgets((prev) => [...prev, { type }]);
  };

export { onClickAddWidget };
