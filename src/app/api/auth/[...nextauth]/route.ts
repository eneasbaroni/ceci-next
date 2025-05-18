import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  theme: {
        colorScheme: "dark", // "auto" | "dark" | "light"
        brandColor: "b33f4c", // Hex color code
        logo: "/Images/icon.svg", // Absolute URL to image
        buttonText: "b33f4c" // Hex color code
    },
});

export { handler as GET, handler as POST };
