import { Input } from "@/components/ui/input";
import { onChangeContent } from "./utils";
import { Dispatch, SetStateAction, useState } from "react";
import { Content } from "@/types/posts";

type Props = {
  index: number;
  widgets: Content;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const InputH1 = ({ index, widgets, setWidgets }: Props) => {
  const widget = widgets.find(
    (widget) => widget.type === "h1" || widget.type === "H1"
  );
  const h1 = widget?.content as string | "";

  const [value, setValue] = useState<string>(h1);

  const handleContent = onChangeContent(index, setValue, setWidgets);

  return (
    <div key={index} className="border border-dashed p-4 cursor-pointer mb-2">
      <Input
        className="text-[34px] font-bold !py-10"
        type="text"
        placeholder="Titre H1"
        value={value}
        onChange={handleContent}
      />
    </div>
  );
};

export { InputH1 };
