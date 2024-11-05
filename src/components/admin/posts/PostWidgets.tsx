import { Dispatch, SetStateAction } from "react";
import {
  AlignVerticalSpaceBetween,
  CircleFadingPlus,
  Image,
  Rows2,
  SquareMousePointer,
  Text,
  Type,
} from "lucide-react";
import { Widget } from "./Widget/Widget";
import { WidgetType } from "./entities";

type Props = {
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const PostWidgets = ({ setAddedWidgets }: Props) => {
  return (
    <div className="h-full bg-sidebar px-2 py-2 overflow-hidden">
      <h2 className="text-right font-medium mb-10">Post Widgets</h2>
      <div className="mb-4">
        <h3 className="text-xs text-sidebar-foreground/70 font-medium text-right mb-2">
          Title
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <Widget
            icon={<Type className="h-5 w-5 mb-2" />}
            title="H1"
            setAddedWidgets={setAddedWidgets}
          />
          <Widget
            icon={<Type className="h-5 w-5 mb-2" />}
            title="H2"
            setAddedWidgets={setAddedWidgets}
          />
          <Widget
            icon={<Type className="h-5 w-5 mb-2" />}
            title="H3"
            setAddedWidgets={setAddedWidgets}
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xs text-sidebar-foreground/70 font-medium text-right mb-2">
          Text
        </h3>
        <div className="grid grid-cols-1 gap-2">
          <Widget
            icon={<Text className="h-5 w-5 mb-2" />}
            title="Paragraph"
            setAddedWidgets={setAddedWidgets}
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xs text-sidebar-foreground/70 font-medium text-right mb-2">
          Media
        </h3>
        <div className="grid grid-cols-1 gap-2">
          <Widget
            icon={<Image className="h-5 w-5 mb-2" />}
            title="Image"
            setAddedWidgets={setAddedWidgets}
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xs text-sidebar-foreground/70 font-medium text-right mb-2">
          Formatting
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <Widget
            icon={<Rows2 className="h-5 w-5 mb-2" />}
            title="Divider"
            setAddedWidgets={setAddedWidgets}
          />
          <Widget
            icon={<AlignVerticalSpaceBetween className="h-5 w-5 mb-2" />}
            title="Spacer"
            setAddedWidgets={setAddedWidgets}
          />
          <Widget
            icon={<SquareMousePointer className="h-5 w-5 mb-2" />}
            title="Button"
            setAddedWidgets={setAddedWidgets}
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xs text-sidebar-foreground/70 font-medium text-right mb-2">
          Embed
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Widget
            icon={<CircleFadingPlus className="h-5 w-5 mb-2" />}
            title="Iframe"
            setAddedWidgets={setAddedWidgets}
          />
          <Widget
            icon={<CircleFadingPlus className="h-5 w-5 mb-2" />}
            title="SocialEmbed"
            setAddedWidgets={setAddedWidgets}
          />
        </div>
      </div>
    </div>
  );
};

export { PostWidgets };
