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
    setWidgets: Dispatch<SetStateAction<Content>>
  ): ChangeEventHandler<HTMLInputElement> =>
  (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    setWidgets((prevWidgets) => {
      return prevWidgets.map((widget, i) =>
        i === index ? { ...widget, content: newValue } : widget
      );
    });
  };

const onClickDeleteWidget =
  (
    index: number,
    setWidgets: Dispatch<SetStateAction<Content>>
  ): MouseEventHandler<SVGSVGElement> =>
  () => {
    setWidgets((prevWidgets) => prevWidgets.filter((_, i) => i !== index));
  };

export { onChangeContent, onClickDeleteWidget };
