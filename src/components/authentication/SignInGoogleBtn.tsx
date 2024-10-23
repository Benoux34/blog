"use client";

import { Icons } from "../Icons/Icons";
import { Button } from "../ui/button";
import { onClickSignInGoogle } from "@/lib/signIn";

const SignInGoogleBtn = () => {
  const handleSignInGoogle = onClickSignInGoogle();

  return (
    <Button className="w-full" variant={"outline"}>
      <Icons.google />
      Connect with Google
    </Button>
  );
};

export { SignInGoogleBtn };
