import { Content } from "@/types/posts";
import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";

const onChangeContent =
  (
    index: number,
    setValue: Dispatch<SetStateAction<string>>,
    setAddedWidgets: Dispatch<SetStateAction<Content>>
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
    setAddedWidgets: Dispatch<SetStateAction<Content>>
  ): MouseEventHandler<SVGSVGElement> =>
  () => {
    setAddedWidgets((prevWidgets) => prevWidgets.filter((_, i) => i !== index));
  };

export { onChangeContent, onClickDeleteWidget };
