import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import { WidgetType } from "../entities";

const onClickDeleteWidget =
  (
    index: number,
    setAddedWidgets: Dispatch<SetStateAction<WidgetType>>
  ): MouseEventHandler<SVGSVGElement> =>
  () => {
    setAddedWidgets((prevWidgets) => prevWidgets.filter((_, i) => i !== index));
  };

export { onClickDeleteWidget };
