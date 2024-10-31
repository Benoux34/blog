import { Input } from "@/components/ui/input";
import { SquareCheck, SquareX } from "lucide-react";

const InputH1 = () => {
  return (
    <div className="relative border border-dashed p-4 cursor-pointer mb-2">
      <div className="absolute -top-5 right-0 flex gap-x-1">
        <SquareX className="text-gray-400 h-4 w-4" strokeWidth={1} />
      </div>
      <Input type="text" placeholder="Titre H1" />
    </div>
  );
};

export { InputH1 };
