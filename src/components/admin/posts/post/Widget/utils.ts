import { toast } from "@/hooks/use-toast";
import { Content, ImagePost } from "@/types/posts";
import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  MutableRefObject,
  SetStateAction,
} from "react";

const onClickAddWidget =
  (
    type: string,
    setWidgets: Dispatch<SetStateAction<Content>>
  ): MouseEventHandler<HTMLDivElement> | undefined =>
  () => {
    setWidgets((prev) => [...prev, { type }]);
  };

const onClickFileInput =
  (fileInputRef: MutableRefObject<HTMLInputElement | null>) => () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

const onChangeFile =
  (
    setUploading: Dispatch<SetStateAction<boolean>>,
    setImage: Dispatch<SetStateAction<ImagePost | undefined>>,
    post_id: string
  ): ChangeEventHandler<HTMLInputElement> =>
  async (e) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;

    setUploading(true);

    const arrayBuffer = await file.arrayBuffer();
    const base64File = Buffer.from(arrayBuffer).toString("base64");

    try {
      const res = await fetch("/api/posts/upload-img", {
        method: "POST",
        body: JSON.stringify({
          file: `data:image/${file.type.split("/")[1]};base64,${base64File}`,
          post_id,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await res.json();
      setImage({ url: data.url, public_id: data.public_id });
      toast({ title: "Image upload!" });
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

export { onClickAddWidget, onClickFileInput, onChangeFile };
