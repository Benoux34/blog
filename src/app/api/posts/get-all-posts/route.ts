import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`SELECT * FROM posts`;

    if (result.rows.length === 0) {
      return NextResponse.json({ message: "No posts found" }, { status: 208 });
    }

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("Error fetching posts by author", error);
    return NextResponse.error();
  }
}
