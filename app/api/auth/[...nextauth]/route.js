import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import Auth0Provider from "next-auth/providers/auth0";
import { dateNowUnix } from "@/utils/dates";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, //NEXTAUTH_SECRET
  adapter: MongoDBAdapter(clientPromise),
  session: { jwt: true }, // Use JSON Web Tokens for session instead of database sessions.
  events: {
    signIn: async ({user, account}) => { //async (ctx) =>
      //when sign in, update db with last sign in time
      //const { user, isNewUser } = ctx;
      
      if(account?.provider === "credentials"){
        console.log("Credenciales", user);
        return true;
      }
      /*try {
        if (isNewUser) {
          user.roles = ["user"];
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
          .collection("users")
          .updateOne({ email: user.email }, { $set: user });
        console.log(`${user.email} logged in and updated in DB =>`);
      } catch (error) {
        console.log(`Error udating user ${user.email} in signinevent:`, error);
      }*/
    },
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),
    // TODO: Aqui va el otro provider
    // ...add more providers here
    CredentialsProvider({
      id: "credentials",
      name :"credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
         //Conexion a la base de datos
        const client = await clientPromise;
        const db = client.db();
        const user = await db.collection("users").findOne({ email: credentials.email });
        
        if(user && user.contrasena === credentials.password){
          console.log(user);
          return user;
        } else {
          return null;
        }
      }
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  callbacks: {
    async jwt({ token, usuario}) {
      token.userRole = ["usuario"];
      //console.log("jwt", token)
      return token
    },
    async session({ session, token }) {
      console.log("session", token)
      try {
        const client = await clientPromise;
        const user = await client
          .db()
          .collection("users")
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