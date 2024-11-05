"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Heading } from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import BulletList from "@tiptap/extension-bullet-list";
import Youtube from "@tiptap/extension-youtube";
import { Toolbar } from "./Toolbar";
import { SquareX } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { WidgetType } from "../entities";
import { onClickDeleteWidget } from "../Editor/utils";

type Props = {
  index: number;
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const Tiptap = ({ index, setAddedWidgets }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Text,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [4],
        },
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: "list-disc pl-6",
        },
      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
    ],
    content: "",
    editorProps: {
      attributes: {
        spellcheck: "false",
        class:
          "flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  const handleDeleteWidget = onClickDeleteWidget(index, setAddedWidgets);

  return (
    <div
      key={index}
      className="relative border border-dashed px-4 pb-4 pt-2 mb-2 cursor-pointer"
    >
      <div className="absolute -top-5 right-0 flex gap-x-1">
        <SquareX
          className="text-gray-400 h-4 w-4"
          strokeWidth={1}
          onClick={handleDeleteWidget}
        />
      </div>

      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export { Tiptap };
