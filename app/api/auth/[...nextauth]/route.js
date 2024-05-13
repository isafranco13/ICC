import NextAuth from "next-auth"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/libs/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import Auth0Provider from "next-auth/providers/auth0";
import { dateNowUnix } from "@/utils/dates";
import GoogleProvider from "next-auth/providers/google";
//import User from "@/models/usuarios";



export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET, //process.env.BASE_SECRET,
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
        /*const client = await clientPromise;
        await client
          .db()
          .collection("users") //users
          .updateOne({ email: user.email }, { $set: user });*/

          console.log("prueba existosa");
          console.log(`${user.email} logged in`);
          //console.log(`${user.email} logged in and updated in DB =>`);
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
    // TODO: Aqui va el otro provider
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req){
        const user = {id: "1", email: "isa@mail.com", name: "isabel",  password: "12345", roles: ["usuario"] }
                if(user && user.password === credentials.password){  //credentials.email === user.email && credentials.password === user.password
                    return user;
                    //return Promise.resolve(user);
              }else{
                return null;
                //return Promise.resolve(null);
              }
            }
    }),
  ],
  
  // A database is optional, but required to persist accounts in a database
  callbacks: {
    /*async jwt({ token}) {
      token.userRole = "usuario" 
      //admin
      console.log(token);
      return token
    },*/
    async jwt({ user,token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
       console.log(session)
       session.user = token.user;
       return session;
      /*try {
        const client = await clientPromise;
        const user = await client
          .db()
          .collection("users") //users
          .findOne({ email: session.user.email });

        // Add the user's role to the session object
        session.user.roles = user.roles[0]; //user.roles

        return Promise.resolve(session);
      } catch (error) {
        return Promise.reject(error);
      }*/
    },
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

