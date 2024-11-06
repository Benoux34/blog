import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = url.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const response = await sql`SELECT * FROM posts WHERE author_id = ${email}`;

    if (!response) {
      return NextResponse.json({ error: "Error" });
    } else {
      return NextResponse.json({ response });
    }
  } catch (error) {
    console.error("Error posts", error);
    return NextResponse.error();
  }
}
