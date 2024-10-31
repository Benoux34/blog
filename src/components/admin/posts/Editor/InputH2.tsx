import { Input } from "@/components/ui/input";
import { SquareX } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { WidgetType } from "../entities";
import { onClickDeleteWidget } from "./utils";

type Props = {
  index: number;
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const InputH2 = ({ index, setAddedWidgets }: Props) => {
  const handleDeleteWidget = onClickDeleteWidget(index, setAddedWidgets);

  return (
    <div className="relative border border-dashed p-4 cursor-pointer mb-2">
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
      />
    </div>
  );
};

export { InputH2 };