import { JSONContent } from "@tiptap/react";

type WidgetType = ReadonlyArray<{
  type: string;
  content?: string | JSONContent;
}>;

export type { WidgetType };
