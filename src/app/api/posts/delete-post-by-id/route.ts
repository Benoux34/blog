import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Post id parameter is required" },
      { status: 400 }
    );
  }

  try {
    const result =
      await sql`DELETE FROM posts WHERE post_id = ${id} RETURNING *`;

    if (result.rowCount === 0) {
      return NextResponse.json(
        { error: "Post not found or already deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, deletedPost: result.rows[0] });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
