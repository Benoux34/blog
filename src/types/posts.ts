import { JSONContent } from "@tiptap/react";

type Posts = ReadonlyArray<{
  post_id: number;
  title: string;
  content: Content | null;
  is_published: boolean | null;
  date_published: string | null;
  date_edited: string | null;
  author_id: string;
  thumbnail: string;
  slug: string | null;
  image_url: string | null;
  image_public_id: string | null;
}>;

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
  image_url: string | null;
  image_public_id: string | null;
}>;

type Content = ReadonlyArray<{
  type: string;
  content?: string | JSONContent;
}>;

type ImagePost = Readonly<{
  url: string;
  public_id: string;
}>;

export type { Posts, Post, Content, ImagePost };
