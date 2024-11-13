"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "../global/Icons/Icons";
import { Eye, EyeOff } from "lucide-react";
import { onClickShowPassword } from "./utils";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

type Props = {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
};

const SignInForm = ({ showPassword, setShowPassword }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowPassword = onClickShowPassword(showPassword, setShowPassword);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const { email, password } = data;

    try {
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setIsLoading(false);
        toast({ title: "Login Successful" });
        router.push("/");
      } else {
        setIsLoading(false);
        toast({
          title: "Login failed!",
          description: "Make sure that your email and password are correct!",
        });
      }
    } catch (error) {
      setIsLoading(false);
      toast({ title: "Login Failed" });
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  {...field}
                  type={showPassword ? "text" : "password"}
                  RightIcon={
                    showPassword ? (
                      <EyeOff
                        className="h-5 w-5 cursor-pointer"
                        onClick={handleShowPassword}
                      />
                    ) : (
                      <Eye
                        className="h-5 w-5 cursor-pointer"
                        onClick={handleShowPassword}
                      />
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {isLoading ? <Icons.spinner /> : <>Login to your account</>}
        </Button>
      </form>
    </Form>
  );
};

export { SignInForm };
