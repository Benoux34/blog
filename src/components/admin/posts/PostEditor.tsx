import { WidgetType } from "./entities";
import { Tiptap } from "./RichText/Tiptap";
import { InputH1 } from "./Editor/InputH1";
import { InputH2 } from "./Editor/InputH2";
import { InputH3 } from "./Editor/InputH3";
import { Divider } from "./Editor/Divider";
import { Dispatch, SetStateAction } from "react";
import { DropzoneEditor } from "./Editor/Dropzone";

type Props = {
  addedWidgets: WidgetType;
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const PostEditor = ({ addedWidgets, setAddedWidgets }: Props) => {
  return (
    <div className="flex flex-col gap-y-5 m-5 lg:m-10">
      {addedWidgets.map((widget, index) => {
        switch (widget.type) {
          case "H1":
            return <InputH1 index={index} setAddedWidgets={setAddedWidgets} />;
          case "H2":
            return <InputH2 index={index} setAddedWidgets={setAddedWidgets} />;
          case "H3":
            return <InputH3 index={index} setAddedWidgets={setAddedWidgets} />;
          case "Paragraph":
            return <Tiptap index={index} setAddedWidgets={setAddedWidgets} />;
          case "Image":
            return (
              <DropzoneEditor index={index} setAddedWidgets={setAddedWidgets} />
            );
          case "Divider":
            return <Divider index={index} setAddedWidgets={setAddedWidgets} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export { PostEditor };
