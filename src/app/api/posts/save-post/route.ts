import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { post_id, title, slug, content, author_id } = data;

  try {
    await sql`INSERT INTO posts (post_id, title, slug, content, author_id, is_published) VALUES (${post_id}, ${title}, ${slug}, ${JSON.stringify(
      content
    )}, ${author_id}, false)`;

    return NextResponse.json({ success: "success" });
  } catch (error) {
    console.error("Error during sign-in", error);
    return NextResponse.error();
  }
}
