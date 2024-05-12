import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";
import { dateNowUnix } from "@/utils/dates";
import GoogleProvider from "next-auth/providers/google";
//import User from "@/models/usuarios";



export const authOptions = {
  secret: process.env.BASE_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  session: { jwt: true }, // Use JSON Web Tokens for session instead of database sessions.
  events: {
    signIn: async (ctx) => {
      //when sign in, update db with last sign in time
      const { user, isNewUser } = ctx;
      try {
        if (isNewUser) {
          user.roles = ["usuario"]; //user 
          user.createdAt = dateNowUnix();
          user.updatedAt = dateNowUnix();
          user.lastLogin = dateNowUnix();
        } else {
          user.lastLogin = dateNowUnix();
        }
        // Save the updated user to the database
        const client = await clientPromise;
        await client
          .db()
          .collection("users") //users
          .updateOne({ email: user.email }, { $set: user });

        console.log(`${user.email} logged in and updated in DB =>`);
      } catch (error) {
        console.log(`Error udating user ${user.email} in signinevent:`, error);
      }
    },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: "credentials",
      credentials:{},
      async authorize(credentials){
        const email = credentials.email;
        const password = credentials.password;
        
        try {
          const client = await clientPromise;
          const user = await client.db().collection("users").findOne({ email: email });
          if (!user) {
            throw new Error("No user found with the given email");
          }
          if (user.password !== password) {
            throw new Error("Incorrect password");
          }
          return user;
        } catch (error) {
          console.log("Error in credentials provider", error);
          throw new Error("Authentication failed");
        }
    },
    })
    
    // TODO: Aqui va el otro provider
    // ...add more providers here
  ],
  // A database is optional, but required to persist accounts in a database
  callbacks: {
    async jwt({ token}) {
      token.userRole = "usuario" 
      //admin
      return token
    },
    async session({ session, token }) {
       console.log(session)
      try {
        const client = await clientPromise;
        const user = await client
          .db()
          .collection("users") //users
          .findOne({ email: session.user.email });

        // Add the user's role to the session object
        session.user.roles = user.roles;

        return Promise.resolve(session);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

