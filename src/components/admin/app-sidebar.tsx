"use client";

import { ChevronUp, FilePlus, LogOut, Moon, Sun, User2 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useTheme } from "next-themes";
import Link from "next/link";

const AppSidebar = () => {
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") redirect("/sign-in");

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/">
          <h1 className="font-semibold">FREEDOM</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent defaultValue={"posts"}>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Blog</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem key="posts">
                <SidebarMenuButton asChild>
                  <a href="/admin/posts/">
                    <FilePlus />
                    <span>Posts</span>
                  </a>
                </SidebarMenuButton>
                <SidebarMenuBadge>0</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 />
                  <p>
                    {session?.user?.name
                      ? session?.user?.name
                      : session?.user?.email}
                  </p>
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                >
                  {theme === "dark" ? (
                    <div className="w-full flex justify-between items-center">
                      Light mode
                      <Sun />
                    </div>
                  ) : (
                    <div className="w-full flex justify-between items-center">
                      Dark mode
                      <Moon />
                    </div>
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <div className="w-full flex justify-between items-center">
                    Sign out
                    <LogOut />
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
