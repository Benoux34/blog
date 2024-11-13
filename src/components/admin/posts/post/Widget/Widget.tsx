import { Dispatch, ReactNode, SetStateAction } from "react";
import { onClickAddWidget } from "./utils";
import { Content } from "@/types/posts";

type Props = {
  icon: ReactNode;
  value: string;
  setAddedWidgets: Dispatch<SetStateAction<Content>>;
};

const Widget = ({ icon, value, setAddedWidgets }: Props) => {
  const handleAddWidget = onClickAddWidget(value, setAddedWidgets);

  return (
    <div
      className="hover:bg-sidebar px-3 py-2.5 cursor-pointer"
      onClick={handleAddWidget}
    >
      {icon}
    </div>
  );
};

export { Widget };
