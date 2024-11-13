import { Content } from "@/types/posts";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

const onClickAddWidget =
  (
    type: string,
    setAddedWidgets: Dispatch<SetStateAction<Content>>
  ): MouseEventHandler<HTMLDivElement> | undefined =>
  () => {
    setAddedWidgets((prev) => [...prev, { type }]);
  };

export { onClickAddWidget };
