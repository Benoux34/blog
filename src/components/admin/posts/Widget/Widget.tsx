import { Dispatch, ReactNode, SetStateAction } from "react";
import { onClickAddWidget } from "./utils";
import { WidgetType } from "../entities";

type Props = {
  icon: ReactNode;
  title: string;
  setAddedWidgets: Dispatch<SetStateAction<WidgetType>>;
};

const Widget = ({ icon, title, setAddedWidgets }: Props) => {
  const handleAddWidget = onClickAddWidget(title, setAddedWidgets);

  return (
    <div
      className="bg-white flex flex-col justify-center items-center border border-dashed px-3 pt-4 pb-3 cursor-pointer"
      onClick={handleAddWidget}
    >
      {icon}
      <p className="text-sm">{title}</p>
    </div>
  );
};

export { Widget };
