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
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Icons } from "../global/Icons/Icons";
import { useRouter } from "next/navigation";
import { onClickShowPassword } from "./utils";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(2, {
      message: "Email must be at least 2 characters.",
    })
    .email("This is not a valid email."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;
type Props = {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
};

const SignUpForm = ({ showPassword, setShowPassword }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleShowPassword = onClickShowPassword(showPassword, setShowPassword);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    const { username, email, password } = data;

    try {
      const response = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.status === 409) {
        setIsLoading(false);
        toast({
          variant: "destructive",
          title: "Register failed",
          description: "Email is already used!",
        });
        return;
      }

      if (!response.ok) {
        setIsLoading(false);
        toast({ variant: "destructive", title: "Register failed!" });
        throw new Error("Network response was not ok");
      }

      if (response.status === 200) {
        setIsLoading(false);
        toast({ title: "Your account is created!" });

        router.push("/");
      }
    } catch (error) {
      setIsLoading(false);
      toast({
        variant: "destructive",
        title: "Registration Failed",
      });
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div className="pt-4">
          <Button className="w-full" type="submit">
            {isLoading ? <Icons.spinner /> : <>Create your account</>}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { SignUpForm };
