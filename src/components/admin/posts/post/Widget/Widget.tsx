import { Dispatch, ReactNode, SetStateAction } from "react";
import { onClickAddWidget } from "./utils";
import { Content } from "@/types/posts";

type Props = {
  icon: ReactNode;
  value: string;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const Widget = ({ icon, value, setWidgets }: Props) => {
  const handleAddWidget = onClickAddWidget(value, setWidgets);

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
