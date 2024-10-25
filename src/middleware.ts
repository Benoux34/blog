import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;
console.log("secret", secret);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/api") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const token = await getToken({ req, secret });
  console.log("token auth - ", token);

  if (token) {
    if (pathname === "/sign-in" || pathname === "/sign-up")
      return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
export const config = { matcher: ["/sign-in", "/sign-up"] };
