"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { FilePlus, LogOut, Moon, Sun, User } from "lucide-react";

const NavUser = () => {
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col md:flex-row items-end md:items-center gap-y-2 md:gap-y-0 gap-x-5 font-light text-xs">
      <Button variant={"ghost"}>
        Welcome{" "}
        {status === "authenticated" && session?.user
          ? session?.user?.name
          : session?.user?.email}
        <User strokeWidth={1} />
      </Button>
      <Button variant={"ghost"}>
        Create your post
        <FilePlus strokeWidth={1} />
      </Button>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        variant={"ghost"}
      >
        {theme === "light" ? (
          <>
            Light mode
            <Sun strokeWidth={1} />
          </>
        ) : (
          <>
            Dark mode
            <Moon strokeWidth={1} />
          </>
        )}
      </Button>
      {status === "authenticated" ? (
        <Button onClick={() => signOut()} variant={"ghost"}>
          Sign out
          <LogOut strokeWidth={1} />
        </Button>
      ) : (
        <Link href="/sign-in">
          <Button variant={"ghost"}>Sign in</Button>
        </Link>
      )}
    </div>
  );
};

export { NavUser };
