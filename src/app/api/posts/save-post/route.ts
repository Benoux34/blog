import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const {
    post_id,
    title,
    slug,
    content,
    author_id,
    image_url,
    image_public_id,
  } = data;

  try {
    await sql`
      INSERT INTO posts (post_id, title, slug, content, author_id, is_published, image_url, image_public_id)
      VALUES (${post_id}, ${title}, ${slug}, ${JSON.stringify(
      content
    )}, ${author_id}, false, ${image_url}, ${image_public_id})
      ON CONFLICT (post_id)
      DO UPDATE SET 
        title = EXCLUDED.title,
        slug = EXCLUDED.slug,
        content = EXCLUDED.content,
        author_id = EXCLUDED.author_id,
        is_published = EXCLUDED.is_published;
        image_url = EXCLUDED.image_url;
        image_public_id = EXCLUDED.image_public_id;
    `;

    return NextResponse.json({ success: "success" });
  } catch (error) {
    console.error("Error during sign-in", error);
    return NextResponse.error();
  }
}
