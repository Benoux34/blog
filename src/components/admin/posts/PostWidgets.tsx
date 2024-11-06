import { Dispatch, SetStateAction } from "react";
import { Heading1, Heading2, Heading3, Rows2, Text } from "lucide-react";
import { Widget } from "./Widget/Widget";
import { WidgetType } from "./entities";

type Props = {
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const PostWidgets = ({ setAddedWidgets }: Props) => {
  return (
    <div className="flex items-center border rounded-lg">
      <Widget
        icon={<Heading1 className="h-5 w-5" strokeWidth={1.5} />}
        value="h1"
        setAddedWidgets={setAddedWidgets}
      />
      <Widget
        icon={<Heading2 className="h-5 w-5" strokeWidth={1.5} />}
        value="h2"
        setAddedWidgets={setAddedWidgets}
      />
      <Widget
        icon={<Heading3 className="h-5 w-5" strokeWidth={1.5} />}
        value="h3"
        setAddedWidgets={setAddedWidgets}
      />
      <Widget
        icon={<Text className="h-5 w-5" strokeWidth={1.5} />}
        value="paragraph"
        setAddedWidgets={setAddedWidgets}
      />
      <Widget
        icon={<Rows2 className="h-5 w-5" strokeWidth={1.5} />}
        value="divider"
        setAddedWidgets={setAddedWidgets}
      />
    </div>
  );
};

export { PostWidgets };
