import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "@/lib/prisma";
import { compareSync } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await db.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (!user) {
          return null;
        }

        const passwordCorrect = await compareSync(
          credentials?.password || "",
          user?.password,
        );

        if (passwordCorrect) {
          return {
            id: user.id,
            username: user.username,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.username = user.username;
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.id = token.id;
      session.user.username = token.username;
      session.user.email = token.email;

      return session;
    },
  },
};
