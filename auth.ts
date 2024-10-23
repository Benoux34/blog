import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// types imports
import type { NextAuthConfig, Session, User } from "next-auth";
import type { UserResponseType, UserType } from "@/types/user";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { createUserObject } from "@/lib/createUserObject";
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";

declare module "next-auth" {
  interface User extends UserType {}
}

declare module "next-auth/adapters" {
  interface AdapterUser extends UserType {}
}

declare module "next-auth/jwt" {
  interface JWT extends UserType {}
}

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const response: any = await sql`
            SELECT * FROM users WHERE email=${credentials?.email as string}
          `;
          const user: UserResponseType = response.rows[0];

          if (!user) return null;

          const checkPassword = await compare(
            (credentials?.password as string) || "",
            user.password
          );

          return user && checkPassword ? createUserObject(user) : null;
        } catch (error) {
          console.error("Error during authentication", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      if (user) {
        token.id = user.id as string;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const userObject: AdapterUser = {
        id: token.id,
        name: token.name,
        accessToken: token.accessToken,
        email: token.email ? token.email : "",
        emailVerified: null,
        password: "",
      };
      session.user = userObject;

      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
    maxAge: 14 * 24 * 60 * 60,
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
