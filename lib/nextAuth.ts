import { getSPhotoFromS3, uploadSPhotoToS3 } from "@/aws/s3_aws";
import { getUserByEmail } from "@/prisma/getUserByEmail";
import { dataURLtoBlob, toDataURL } from "@/utils/image64";
import { NextAuthOptions, getServerSession } from "next-auth";
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

      const foundUser = await getUserByEmail(user.email ?? "");
      if (!foundUser) return false;
      return true;
    },
    async redirect({ url, baseUrl }) {
      // Return to Server Session
      return baseUrl;
    },
    async session({ session, user, token }) {
      // Return to Server Session
      const foundUser = await getUserByEmail(session?.user?.email ?? "");
      const returnUser = {
        ...foundUser,
        image: "",
      };
      try {
        const image = await getSPhotoFromS3(`${foundUser?.id}-profile`);
        if (image === "UnknownError") throw new Error("Object does not exist.");
        returnUser.image = image;
        return { user: returnUser, expires: session.expires };
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) message = error.message;
        console.log(message);
        if (session.user && session.user.image) {
          returnUser.image = "/no-profile.png";
        }
        return { user: returnUser, expires: session.expires };
      }
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
