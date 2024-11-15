import { Input } from "@/components/ui/input";
import { Dispatch, ReactNode, SetStateAction, useRef, useState } from "react";
import { onChangeFile, onClickFileInput } from "./utils";
import { ImagePost } from "@/types/posts";
import { Icons } from "@/components/global/Icons/Icons";

type Props = {
  icon: ReactNode;
  setImage: Dispatch<SetStateAction<ImagePost | undefined>>;
  post_id: string;
};

const WidgetImg = ({ icon, setImage, post_id }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [uploading, setUploading] = useState<boolean>(false);

  const handleClickFileInput = onClickFileInput(fileInputRef);
  const handleChangeFile = onChangeFile(setUploading, setImage, post_id);

  return (
    <div
      className="hover:bg-sidebar px-3 py-2.5 cursor-pointer"
      onClick={handleClickFileInput}
    >
      <Input
        type="file"
        accept="image/png, image/jpg, image/jpeg, image/webp"
        ref={fileInputRef}
        className="hidden"
        onChange={handleChangeFile}
      />
      {uploading ? <Icons.spinner className="animate-spin" /> : icon}
    </div>
  );
};

export { WidgetImg };
