"use client";

import { Dispatch, SetStateAction } from "react";
import { Heading2, Heading3, Rows2, Text } from "lucide-react";
import { Widget } from "./Widget/Widget";
import { Button } from "@/components/ui/button";
import { onClickResetPost, onClickSave } from "./utils";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { Content } from "@/types/posts";

type Props = {
  postId: string;
  widgets: Content;
  setWidgets: Dispatch<SetStateAction<Content>>;
};

const PostWidgets = ({ postId, widgets, setWidgets }: Props) => {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/sign-in");

  const handleSave = onClickSave(postId, widgets, session?.user?.email);
  const handleResetPost = onClickResetPost(setWidgets);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col lg:flex-row items-center gap-x-2 gap-y-2 lg:gap-y-0">
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
      </div>
      <div>
        <Button onClick={handleResetPost} className="mr-2" variant={"outline"}>
          Reset
        </Button>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};

export { PostWidgets };
