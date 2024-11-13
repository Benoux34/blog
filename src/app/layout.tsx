import "./globals.css";
import type { Metadata } from "next";
import { auth } from "../../auth";
import { IBM_Plex_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/components/global/Providers/ThemeProvider";

const IBM = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Blog in Next",
  description: "Blog by Benoux",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="fr">
      <body className={`${IBM.className}`}>
        <SessionProvider session={session}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
