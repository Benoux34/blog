import { Input } from "@/components/ui/input";
import { SquareX } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { onChangeContent, onClickDeleteWidget } from "./utils";
import { Content } from "@/types/posts";

type Props = {
  index: number;
  widgets: Content;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const InputH3 = ({ index, widgets, setWidgets }: Props) => {
  const widget = widgets.find((widget) => widget.type === "h3");
  const h3 = widget?.content as string | "";

  const [value, setValue] = useState<string>(h3);

  const handleContent = onChangeContent(index, setValue, setWidgets);
  const handleDeleteWidget = onClickDeleteWidget(index, setWidgets);

  return (
    <div
      key={index}
      className="relative border border-dashed p-4 cursor-pointer mb-2"
    >
      <div className="absolute -top-5 right-0 flex gap-x-1">
        <SquareX
          className="text-gray-400 h-4 w-4"
          strokeWidth={1}
          onClick={handleDeleteWidget}
        />
      </div>
      <Input
        className="text-[26px] font-medium !py-6"
        type="text"
        placeholder="Titre H3"
        value={value}
        onChange={handleContent}
      />
    </div>
  );
};

export { InputH3 };
