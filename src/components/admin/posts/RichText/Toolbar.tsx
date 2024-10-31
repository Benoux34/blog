import { Toggle } from "@/components/ui/toggle";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Heading2,
  Heading4,
  Italic,
  List,
  Strikethrough,
} from "lucide-react";

type Props = Readonly<{
  editor: Editor | null;
}>;

const Toolbar = ({ editor }: Props) => {
  if (!editor) return;

  return (
    <div className="flex items-center rounded-t-md mb-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading4 className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="w-4" />
      </Toggle>
    </div>
  );
};

export { Toolbar };