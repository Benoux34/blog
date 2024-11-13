"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import BulletList from "@tiptap/extension-bullet-list";
import Youtube from "@tiptap/extension-youtube";
import TextAlign from "@tiptap/extension-text-align";
import { Toolbar } from "./Toolbar";
import { SquareX } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { Content } from "@/types/posts";
import { onClickDeleteWidget } from "../utils";

type Props = {
  index: number;
  setAddedWidgets: Dispatch<SetStateAction<Content>>;
};

const Tiptap = ({ index, setAddedWidgets }: Props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
      Text,
      Heading.configure({
        HTMLAttributes: {
          class: "text-xl font-bold",
          levels: [3],
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
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
      }),
    ],
    content: "",
    onUpdate({ editor }) {
      setAddedWidgets((prevWidgets) => {
        return prevWidgets.map((widget, i) =>
          i === index
            ? { type: "paragraph", content: editor.getHTML() }
            : widget
        );
      });
    },
    editable: true,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        spellcheck: "false",
        class:
          "flex flex-col min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  const handleDeleteWidget = onClickDeleteWidget(index, setAddedWidgets);

  return (
    <div
      key={index}
      className="relative border border-dashed px-4 pb-4 pt-2 mb-2"
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
