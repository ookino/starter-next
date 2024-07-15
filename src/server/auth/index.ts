import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { env } from "~/env";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "../db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
