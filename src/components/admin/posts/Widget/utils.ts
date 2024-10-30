import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { WidgetType } from "../entities";

const onClickAddWidget =
  (
    type: string,
    setAddedWidgets: Dispatch<SetStateAction<WidgetType>>
  ): MouseEventHandler<HTMLDivElement> | undefined =>
  () => {
    setAddedWidgets((prev) => [...prev, { type }]);
  };

export { onClickAddWidget };
