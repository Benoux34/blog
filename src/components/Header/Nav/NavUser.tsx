"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const NavUser = () => {
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col md:flex-row items-end md:items-center gap-y-2 md:gap-y-0 gap-x-5 font-light text-xs">
      <p className="cursor-default">
        Welcome {status === "authenticated" && session?.user?.name}
      </p>
      <p className="cursor-pointer">Create your post</p>
      <Button
        className="h-auto text-xs p-0 m-0"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant={"ghost"}
      >
        {theme === "light" ? "Light mode" : "Dark mode"}
      </Button>
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
