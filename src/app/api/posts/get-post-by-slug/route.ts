import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  if (!slug) {
    return NextResponse.json(
      { error: "Post slug parameter is required" },
      { status: 400 }
    );
  }

  const result = await sql`SELECT * FROM posts WHERE slug = ${slug}`;

  if (result.rows.length === 0) {
    return NextResponse.json({ message: "No post found" }, { status: 200 });
  }

  return NextResponse.json(result.rows[0] || null);
}
