import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "@/components/ui/input";
import { SquareX } from "lucide-react";
import { onChangeContent, onClickDeleteWidget } from "./utils";
import { Content } from "@/types/posts";

type Props = {
  index: number;
  widgets: Content;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const InputH2 = ({ index, widgets, setWidgets }: Props) => {
  const widget = widgets.find((widget) => widget.type === "h2");
  const h2 = widget?.content as string | "";

  const [value, setValue] = useState<string>(h2);

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
        className="text-[32px] font-semibold !py-8"
        type="text"
        placeholder="Titre H2"
        value={value}
        onChange={handleContent}
      />
    </div>
  );
};

export { InputH2 };
