"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const NavUser = () => {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center gap-x-5 font-light text-xs">
      <p className="cursor-default">
        Welcome {status === "authenticated" && session?.user?.name}
      </p>
      <p className="cursor-pointer">Create your post</p>
      <p className="cursor-pointer">Dark mode</p>
      {status === "authenticated" ? (
        <Button
          onClick={() => signOut()}
          className="h-auto text-xs p-0 m-0"
          variant={"ghost"}
        >
          Sign out
        </Button>
      ) : (
        <Link href="/sign-in">
          <Button className="h-auto text-xs p-0 m-0" variant={"ghost"}>
            Sign in
          </Button>
        </Link>
      )}
    </div>
  );
};

export { NavUser };
