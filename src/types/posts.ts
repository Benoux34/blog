import { JSONContent } from "@tiptap/react";

type Post = Readonly<{
  post_id: number;
  title: string;
  content: Content | null;
  is_published: boolean | null;
  date_published: string | null;
  date_edited: string | null;
  author_id: string;
  thumbnail: string;
  slug: string | null;
}>;

type Content = ReadonlyArray<{
  type: string;
  content?: string | JSONContent;
}>;

export type { Post, Content };
