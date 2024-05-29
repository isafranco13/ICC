import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import { dateNowUnix } from "@/utils/dates";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";



export const  authOptions= { //authOptions
  secret: process.env.NEXTAUTH_SECRET, //NEXTAUTH_SECRET
  adapter: MongoDBAdapter(clientPromise),
  session: { jwt: true }, // Use JSON Web Tokens for session instead of database sessions.
  events: {
    signIn: async (ctx) => { //async (ctx) =>
      //when sign in, update db with last sign in time
      //const { user, isNewUser } = ctx;
      try {
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
      }
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
      name :"Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //NUEVA FORMA
        //Conexion a la base de datos
        const client = await clientPromise;
        const db = client.db();

        const user = await db.collection("users").findOne({ email: credentials.email });
        if(user && user.password === credentials.password){
          return user;
        }else{
          return null;
        }
        //return user;
      }
    }),
  ],
  // A database is optional, but required to persist accounts in a database
  callbacks: {
    async jwt({ token, user}) {
      if(user){
        token.roles = user.roles;
      }
      //token.userRole = ["usuario"];
      console.log("jwt", token)
      return token;
    },
    async session({ session, token }) {
      console.log("session")
      try {
        const client = await clientPromise;
        const user = await client
          .db()
          .collection("users")
          .findOne({ email: session.user.email });

        // Add the user's role to the session object
        session.user.roles = user.roles;
        // Add the user's ID to the session object
        session.user.id = user._id;

        return Promise.resolve(session);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    
  },
}

const handler = NextAuth(authOptions);
//export default NextAuth(authOptions);
export { handler as GET, handler as POST };