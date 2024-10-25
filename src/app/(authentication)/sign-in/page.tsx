"use client";

import { useState } from "react";
import { Icons } from "@/components/Icons/Icons";
import { LeftSideAuth } from "@/components/Authentication/LeftSideAuth";
import { SignInForm } from "@/components/Authentication/SignInForm";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="bg-gray-100 dark:bg-[#18181B] w-full h-screen flex overflow-hidden xl:p-5">
      <div className="hidden xl:inline xl:w-[60%]">
        <LeftSideAuth showPassword={showPassword} />
      </div>
      <div className="relative bg-white dark:bg-black h-full w-full xl:w-[40%] flex flex-col justify-center xl:rounded-lg p-5 xl:px-10">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold mb-1">Login to your account</h1>
          <p className="text-slate-400 font-light">Please enter your details</p>
        </div>
        <div className="mb-4">
          <SignInForm
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
        <div className="relative mb-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div>
          <Button
            onClick={() => signIn("google")}
            className="w-full"
            variant={"outline"}
          >
            <Icons.google />
            Connect with Google
          </Button>
        </div>

        <div className="absolute bottom-5 right-5 xl:right-10">
          <a href="/sign-up" className="text-sm hover:underline">
            You don&apos;t have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
