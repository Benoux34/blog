import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";
import { signInCredentials } from "@/lib/signIn";

export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  const checkEmail = await sql`
    SELECT * FROM users WHERE email=${email}
  `;

  if (checkEmail.rows[0]) {
    return NextResponse.json(
      { message: "Email is already used!" },
      { status: 409 }
    );
  }

  try {
    const hashedPassword = await hash(password, 10);

    await sql`INSERT INTO users (username, email, password) VALUES (${username}, ${email}, ${hashedPassword})`;

    signInCredentials(email, password);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (e) {
    console.log({ e });
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
