import type { Metadata } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";
import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Freedom | Blog in Next",
  description: "Blog by Benoux",
};

export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <div className="mx-4 my-2">
      <Header />
      <main>
        <SessionProvider session={session}>
          {children}
          <Toaster />
        </SessionProvider>
      </main>
    </div>
  );
}
