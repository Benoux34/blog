import { Editor } from "@tiptap/react";
import { Dispatch, SetStateAction } from "react";

const onClickTextAlign =
  (
    editor: Editor,
    textAlignToggle: "left" | "center" | "right",
    setTextAlignToggle: Dispatch<SetStateAction<"left" | "center" | "right">>
  ) =>
  () => {
    const newTextAlign =
      textAlignToggle === "left"
        ? "center"
        : textAlignToggle === "center"
        ? "right"
        : "left";

    setTextAlignToggle(newTextAlign);
    editor.chain().focus().setTextAlign(newTextAlign).run();
  };

export { onClickTextAlign };
