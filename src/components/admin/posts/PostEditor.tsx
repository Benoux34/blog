import { Dispatch, SetStateAction } from "react";
import { WidgetType } from "./entities";
import { Tiptap } from "./RichText/Tiptap";
import { InputH1 } from "./Editor/InputH1";
import { InputH2 } from "./Editor/InputH2";
import { InputH3 } from "./Editor/InputH3";
import { Divider } from "./Editor/Divider";

type Props = {
  addedWidgets: WidgetType;
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const PostEditor = ({ addedWidgets, setAddedWidgets }: Props) => {
  return (
    <div className="flex flex-col gap-y-5 m-5 lg:m-10">
      {addedWidgets.map((widget, index) => {
        switch (widget.type) {
          case "h1":
            return <InputH1 index={index} setAddedWidgets={setAddedWidgets} />;
          case "h2":
            return <InputH2 index={index} setAddedWidgets={setAddedWidgets} />;
          case "h3":
            return <InputH3 index={index} setAddedWidgets={setAddedWidgets} />;
          case "paragraph":
            return <Tiptap index={index} setAddedWidgets={setAddedWidgets} />;
          case "divider":
            return <Divider index={index} setAddedWidgets={setAddedWidgets} />;
          default:
            return <InputH1 index={index} setAddedWidgets={setAddedWidgets} />;
        }
      })}
    </div>
  );
};

export { PostEditor };
