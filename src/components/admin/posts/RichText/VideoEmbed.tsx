"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Editor } from "@tiptap/react";

type Props = {
  editor: Editor;
};

const FormSchema = z.object({
  url: z.string().email({
    message: "Invalid email address.",
  }),
  width: z.number().min(2, {
    message: "Width must be at least 2 characters.",
  }),
  height: z.number().min(2, {
    message: "Height must be at least 2 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

const VideoEmbed = ({ editor }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
      width: 640,
      height: 480,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const { url, width, height } = data;

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, width),
        height: Math.max(180, height),
      });
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle className="flex items-center gap-x-3">
          Youtube Embed
        </AlertDialogTitle>
        <AlertDialogDescription>
          Embed any YouTube video by entering the URL and size (width, height).
        </AlertDialogDescription>
      </AlertDialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Youtube Url" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-x-3">
            <FormField
              control={form.control}
              name="width"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder="Width" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="number" placeholder="Height" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction type="submit">
              {isLoading ? "loading" : <p>Submit</p>}
            </AlertDialogAction>
          </AlertDialogFooter>
        </form>
      </Form>
    </AlertDialogContent>
  );
};

export { VideoEmbed };
