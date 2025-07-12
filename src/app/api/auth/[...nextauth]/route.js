import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
 providers: [
  GoogleProvider({
      clientId:process.env.NEXTAUTH_GOOGLE_CLIENT_ID || "",
      clientSecret:process.env.NEXTAUTH_GOOGLE_CLIENT_SECRET || ""
  })
 ],
 theme: {
    colorScheme: "light",
    logo: "/img/logo.png",
    brandColor: "#f00",
  },
  pages: {
    signIn: '/auth/signin', // Custom sign-in route
  },
  
}

export const handlers = NextAuth (authOptions)
export {handlers as GET, handlers as POST}