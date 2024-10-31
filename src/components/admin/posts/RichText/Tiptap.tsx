"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Heading } from "@tiptap/extension-heading";
import Text from "@tiptap/extension-text";
import BulletList from "@tiptap/extension-bullet-list";
import { Toolbar } from "./Toolbar";
import { SquareX } from "lucide-react";

const Tiptap = () => {
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
    ],
    content: "<p>Hello World! 🌎️</p>",
    editorProps: {
      attributes: {
        class:
          "flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
  });

  return (
    <div className="relative border border-dashed px-4 pb-4 pt-2 mb-2 cursor-pointer">
      <div className="absolute -top-5 right-0 flex gap-x-1">
        <SquareX className="text-gray-400 h-4 w-4" strokeWidth={1} />
      </div>

      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export { Tiptap };
