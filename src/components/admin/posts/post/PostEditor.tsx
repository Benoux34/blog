import { Dispatch, SetStateAction } from "react";
import { Tiptap } from "./Editor/RichText/Tiptap";
import { InputH1 } from "./Editor/InputH1";
import { InputH2 } from "./Editor/InputH2";
import { InputH3 } from "./Editor/InputH3";
import { Divider } from "./Editor/Divider";
import { Content } from "@/types/posts";

type Props = {
  widgets: Content;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const PostEditor = ({ widgets, setWidgets }: Props) => {
  return (
    <div className="flex flex-col gap-y-5 m-5 lg:m-10">
      {widgets.map((widget, index) => {
        switch (widget.type) {
          case "h1":
            return (
              <InputH1
                index={index}
                widgets={widgets}
                setWidgets={setWidgets}
              />
            );
          case "h2":
            return (
              <InputH2
                index={index}
                widgets={widgets}
                setWidgets={setWidgets}
              />
            );
          case "h3":
            return (
              <InputH3
                index={index}
                widgets={widgets}
                setWidgets={setWidgets}
              />
            );
          case "paragraph":
            return (
              <Tiptap index={index} widgets={widgets} setWidgets={setWidgets} />
            );
          case "divider":
            return <Divider index={index} setWidgets={setWidgets} />;
          default:
            return (
              <InputH1
                index={index}
                widgets={widgets}
                setWidgets={setWidgets}
              />
            );
        }
      })}
    </div>
  );
};

export { PostEditor };
