"use client";

import { Icons } from "../Icons/Icons";
import { Button } from "../ui/button";

const SignInGoogleBtn = () => {
  return (
    <Button className="w-full" variant={"outline"}>
      <Icons.google />
      Connect with Google
    </Button>
  );
};

export { SignInGoogleBtn };
