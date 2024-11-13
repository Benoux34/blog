import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const author = url.searchParams.get("author");

  if (!author) {
    return NextResponse.json(
      { error: "Author parameter is required" },
      { status: 400 }
    );
  }

  try {
    const result = await sql`SELECT * FROM posts WHERE author_id = ${author}`;

    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: "No posts found for this author" },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching posts by author", error);
    return NextResponse.error();
  }
}
