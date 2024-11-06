import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";
import { WidgetType } from "../entities";

const onChangeContent =
  (
    index: number,
    setValue: Dispatch<SetStateAction<string>>,
    setAddedWidgets: Dispatch<SetStateAction<WidgetType>>
  ): ChangeEventHandler<HTMLInputElement> =>
  (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    setAddedWidgets((prevWidgets) => {
      return prevWidgets.map((widget, i) =>
        i === index ? { ...widget, content: newValue } : widget
      );
    });
  };

const onClickDeleteWidget =
  (
    index: number,
    setAddedWidgets: Dispatch<SetStateAction<WidgetType>>
  ): MouseEventHandler<SVGSVGElement> =>
  () => {
    setAddedWidgets((prevWidgets) => prevWidgets.filter((_, i) => i !== index));
  };

export { onChangeContent, onClickDeleteWidget };
