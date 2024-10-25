import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../../auth";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Authentication | Blog in Next",
  description: "Authentication | Blog by Benoux",
};

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <>
      <main className={`${poppins.className}`}>
        <SessionProvider session={session}>
          {children}
          <Toaster />
        </SessionProvider>
      </main>
    </>
  );
}
