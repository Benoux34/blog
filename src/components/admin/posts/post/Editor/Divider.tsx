import { Separator } from "@/components/ui/separator";
import { SquareX } from "lucide-react";
import { onClickDeleteWidget } from "./utils";
import { Dispatch, SetStateAction } from "react";
import { Content } from "@/types/posts";

type Props = {
  index: number;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const Divider = ({ index, setWidgets }: Props) => {
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
      <Separator />
    </div>
  );
};

export { Divider };
