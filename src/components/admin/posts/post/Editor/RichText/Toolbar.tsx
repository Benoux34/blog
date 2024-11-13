"use client";

import { useState } from "react";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Toggle } from "@/components/ui/toggle";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { Editor } from "@tiptap/react";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading4,
  Italic,
  List,
  Strikethrough,
  Video,
} from "lucide-react";
import { VideoEmbed } from "./VideoEmbed";
import { onClickTextAlign } from "./utils";

type Props = Readonly<{
  editor: Editor | null;
}>;

const Toolbar = ({ editor }: Props) => {
  const [textAlignToggle, setTextAlignToggle] = useState<
    "left" | "center" | "right"
  >("left");

  if (!editor) return;

  const handleTextAlign = onClickTextAlign(
    editor,
    textAlignToggle,
    setTextAlignToggle
  );

  return (
    <div className="flex items-center rounded-t-md mb-1">
      <Toggle
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        <Heading4 className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        <Bold className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="w-4" />
      </Toggle>
      <Toggle onClick={handleTextAlign}>
        {textAlignToggle === "left" ? (
          <AlignLeft
            onClick={() => setTextAlignToggle("right")}
            className="w-4"
          />
        ) : textAlignToggle === "center" ? (
          <AlignCenter
            onClick={() => setTextAlignToggle("left")}
            className="w-4"
          />
        ) : (
          <AlignRight
            onClick={() => setTextAlignToggle("center")}
            className="w-4"
          />
        )}
      </Toggle>
      <AlertDialog>
        <AlertDialogTrigger className="hover:bg-gray-50 rounded-lg px-3 py-2">
          <Video className="w-5" />
        </AlertDialogTrigger>
        <VideoEmbed editor={editor} />
      </AlertDialog>
    </div>
  );
};

export { Toolbar };
