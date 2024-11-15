import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Post id parameter is required" },
      { status: 400 }
    );
  }

  const result = await sql`SELECT * FROM posts WHERE post_id = ${id}`;

  if (result.rows.length === 0) {
    return NextResponse.json(
      { message: "No post found for this id" },
      { status: 200 }
    );
  }

  return NextResponse.json(result.rows[0] || null);
}
