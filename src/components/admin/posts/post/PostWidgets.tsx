"use client";

import { Dispatch, SetStateAction } from "react";
import { Heading1, Heading2, Heading3, Rows2, Text } from "lucide-react";
import { Widget } from "./Widget/Widget";
import { Button } from "@/components/ui/button";
import { onClickResetPost, onClickSave } from "./utils";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Content } from "@/types/posts";

type Props = {
  postId: string;
  addedWidgets: Content;
  setAddedWidgets: Dispatch<SetStateAction<Content>>;
};

const PostWidgets = ({ postId, addedWidgets, setAddedWidgets }: Props) => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/sign-in");

  const handleSave = onClickSave(postId, addedWidgets, session?.user?.email);
  const handleResetPost = onClickResetPost(setAddedWidgets);

  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row items-center gap-x-2 gap-y-2 lg:gap-y-0">
      <div className="flex items-center border rounded-lg">
        <Widget
          icon={<Heading1 className="h-5 w-5" strokeWidth={1.5} />}
          value="h1"
          setAddedWidgets={setAddedWidgets}
        />
        <Widget
          icon={<Heading2 className="h-5 w-5" strokeWidth={1.5} />}
          value="h2"
          setAddedWidgets={setAddedWidgets}
        />
        <Widget
          icon={<Heading3 className="h-5 w-5" strokeWidth={1.5} />}
          value="h3"
          setAddedWidgets={setAddedWidgets}
        />
        <Widget
          icon={<Text className="h-5 w-5" strokeWidth={1.5} />}
          value="paragraph"
          setAddedWidgets={setAddedWidgets}
        />
        <Widget
          icon={<Rows2 className="h-5 w-5" strokeWidth={1.5} />}
          value="divider"
          setAddedWidgets={setAddedWidgets}
        />
      </div>
      <div>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleResetPost} className="ml-2" variant={"outline"}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export { PostWidgets };
