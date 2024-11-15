import cloudinary from "@/utils/cloudinary";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { file, post_id } = await request.json();

  if (!file || !post_id) {
    return NextResponse.json(
      { error: "No valid file provided or missing post_id" },
      { status: 400 }
    );
  }

  try {
    const base64File = file.split(",")[1];
    const result = await cloudinary.uploader.upload(
      `data:image/jpeg;base64,${base64File}`,
      {
        folder: "blog-images",
      }
    );

    await sql`UPDATE posts SET image_url = ${result.secure_url}, image_public_id = ${result.public_id} WHERE post_id = ${post_id}`;

    return NextResponse.json({
      public_id: result.public_id,
      url: result.secure_url,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}
