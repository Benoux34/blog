import { NextResponse } from "next/server";
import { signIn } from "../../../../../auth";

export async function POST(request: Request) {
  const data = await request.json();
  const { email, password } = data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result || result.error) {
      return NextResponse.json({ error: "Invalid credentials" });
    } else {
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Error during sign-in", error);
    return NextResponse.error();
  }
}
