import { Input } from "@/components/ui/input";
import { WidgetType } from "./entities";
import { Tiptap } from "./RichText/Tiptap";
import { InputH1 } from "./Editor/InputH1";
import { InputH2 } from "./Editor/InputH2";
import { InputH3 } from "./Editor/InputH3";
import { Divider } from "./Editor/Divider";

type Props = {
  addedWidgets: WidgetType;
};

const PostEditor = ({ addedWidgets }: Props) => {
  return (
    <div className="flex flex-col gap-y-5 m-5 lg:m-10">
      {addedWidgets.map((widget) => {
        switch (widget.type) {
          case "H1":
            return <InputH1 />;
          case "H2":
            return <InputH2 />;
          case "H3":
            return <InputH3 />;
          case "Paragraph":
            return <Tiptap />;
          case "Image":
            return <Input type="file" placeholder="Image" />;
          case "Divider":
            return <Divider />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export { PostEditor };
