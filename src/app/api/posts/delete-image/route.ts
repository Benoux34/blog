import cloudinary from "@/utils/cloudinary";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const post_id = url.searchParams.get("post_id") as string;
  const public_id = url.searchParams.get("public_id") as string;

  if (!post_id && !public_id) {
    return NextResponse.json(
      { error: "Post id & public id parameters are required" },
      { status: 400 }
    );
  }

  try {
    await cloudinary.uploader.destroy(public_id);

    await sql`UPDATE posts SET image_url = null, image_public_id = null WHERE post_id = ${post_id}`;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
