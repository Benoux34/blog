import { Separator } from "@/components/ui/separator";
import { SquareX } from "lucide-react";

const Divider = () => {
  return (
    <div className="relative border border-dashed p-4 cursor-pointer mb-2">
      <div className="absolute -top-5 right-0 flex gap-x-1">
        <SquareX className="text-gray-400 h-4 w-4" strokeWidth={1} />
      </div>
      <Separator />
    </div>
  );
};

export { Divider };
