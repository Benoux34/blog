import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/app-sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Admin | Blog in Next",
  description: "Admin | Blog by Benoux",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={`${poppins.className}`}>
        <SessionProvider session={session}>
          <SidebarTrigger />
          {children}
          <Toaster />
        </SessionProvider>
      </main>
    </SidebarProvider>
  );
}
