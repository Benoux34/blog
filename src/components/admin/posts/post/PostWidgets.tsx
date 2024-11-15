"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Heading2, Heading3, Image, Rows2, SquareX, Text } from "lucide-react";
import { Widget } from "./Widget/Widget";
import { Button } from "@/components/ui/button";
import {
  onClickDeleteImage,
  onClickDeletePost,
  onClickResetPost,
  onClickSave,
} from "./utils";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { Content, ImagePost } from "@/types/posts";
import { WidgetImg } from "./Widget/WidgetImg";
import { Icons } from "@/components/global/Icons/Icons";

type Props = {
  postId: string;
  widgets: Content;
  setWidgets: Dispatch<SetStateAction<Content>>;
  image: ImagePost | undefined;
  setImage: Dispatch<SetStateAction<ImagePost | undefined>>;
};

const PostWidgets = ({
  postId,
  widgets,
  setWidgets,
  image,
  setImage,
}: Props) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/sign-in");

  const [isLoading, setLoading] = useState<boolean>(false);

  const handleSave = onClickSave(postId, widgets, session?.user?.email);
  const handleResetPost = onClickResetPost(setWidgets);
  const handleDeletePost = onClickDeletePost(postId, router);
  const handleDeleteImage =
    image && onClickDeleteImage(postId, image.public_id, setLoading, router);

  return (
    <div className="w-[90%] md:w-[79%] fixed bottom-5 right-5 flex justify-between items-end">
      <div className="relative">
        <div
          className={
            image?.public_id !== "" && image?.url !== ""
              ? "hidden xl:inline-flex bg-white border border-dashed p-4"
              : "!hidden border border-none"
          }
        >
          <div className="absolute -top-5 right-0 flex gap-x-1">
            <SquareX
              className="text-gray-400 h-4 w-4 cursor-pointer"
              strokeWidth={1}
              onClick={handleDeleteImage}
            />
          </div>
          {isLoading ? (
            <Icons.spinner className="animate-spin" />
          ) : (
            <img className="max-h-[200px] max-w-[400px]" src={image?.url} />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-x-2 gap-y-2 lg:gap-y-0">
        <div className="bg-white flex items-center border rounded-lg">
          <Widget
            icon={<Heading2 className="h-5 w-5" strokeWidth={1.5} />}
            value="h2"
            setWidgets={setWidgets}
          />
          <Widget
            icon={<Heading3 className="h-5 w-5" strokeWidth={1.5} />}
            value="h3"
            setWidgets={setWidgets}
          />
          <Widget
            icon={<Text className="h-5 w-5" strokeWidth={1.5} />}
            value="paragraph"
            setWidgets={setWidgets}
          />
          <Widget
            icon={<Rows2 className="h-5 w-5" strokeWidth={1.5} />}
            value="divider"
            setWidgets={setWidgets}
          />
          {image?.public_id === "" && image?.url === "" && (
            <WidgetImg
              icon={<Image className="h-5 w-5" strokeWidth={1.5} />}
              setImage={setImage}
              post_id={postId}
            />
          )}
        </div>
        <div>
          <Button
            onClick={handleDeletePost}
            className="mr-2"
            variant={"destructive"}
          >
            Delete
          </Button>
          <Button
            onClick={handleResetPost}
            className="mr-2"
            variant={"outline"}
          >
            Reset
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export { PostWidgets };
