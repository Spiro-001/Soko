import { NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "GOOGLE_ID",
      clientSecret: process.env.GOOGLE_SECRET ?? "GOOGLE_SECRET",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // Validate user
      console.log(user);
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Return to Server Session
      return baseUrl;
    },
    async session({ session, user, token }) {
      // Return to Server Session
      return session;
    },
    async jwt({ token, user, account, profile }) {
      // Return to Server Session
      return token;
    },
  },
  pages: {
    // signIn: "/auth/signin",
    // signOut: "/auth/signout",
    error: "/", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
