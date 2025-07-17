import dbConnect from "@/app/lib/mongodb";
import User from "@/app/models/User";
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
  
  callbacks: {
    async signIn({ user }) {
      try {
        // Connect to MongoDB
        await dbConnect();

        // Check if user already exists
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // Create new user in MongoDB
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
          });
          console.log('New user created in MongoDB');
        } else {
          console.log('User already exists in MongoDB');
        }

        return true; // Allow sign-in
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false; // Deny sign-in on error
      }
    },
    async session({ session, user }) {
      // Optionally attach the MongoDB user ID to the session
      await dbConnect();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.id = dbUser._id.toString();
      }
      return session;
    },
  },
  
}

export const handlers = NextAuth (authOptions)
export {handlers as GET, handlers as POST}

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       try {
//         // Connect to MongoDB
//         await dbConnect();

//         // Check if user already exists
//         const existingUser = await User.findOne({ email: user.email });

//         if (!existingUser) {
//           // Create new user in MongoDB
//           await User.create({
//             name: user.name,
//             email: user.email,
//             image: user.image,
//           });
//           console.log('New user created in MongoDB');
//         } else {
//           console.log('User already exists in MongoDB');
//         }

//         return true; // Allow sign-in
//       } catch (error) {
//         console.error('Error in signIn callback:', error);
//         return false; // Deny sign-in on error
//       }
//     },
//     async session({ session, user }) {
//       // Optionally attach the MongoDB user ID to the session
//       await dbConnect();
//       const dbUser = await User.findOne({ email: session.user.email });
//       if (dbUser) {
//         session.user.id = dbUser._id.toString();
//       }
//       return session;
//     },
//   },
// };