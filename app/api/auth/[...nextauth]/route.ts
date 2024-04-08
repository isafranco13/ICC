import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/usuarios";
import { GoogleProfile } from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [ GoogleProvider ({
        /*profile(profile: GoogleProfile){
            //console.log(profile) -> Ver perfil en consola 
            return{
                ...profile,
                rol: "usuario", //profile.rol ??
                id: profile.sub,
            }
        },*/
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

        }),
        CredentialsProvider({
            id: 'credentials',
            name: "Credentials",
            credentials: {
              email: { label: "Email", type: "text" },
              password: { label: "Password", type: "text" },
            },
            async authorize(credentials: any) { //credentials: any
                //Ejemplo para conocer si funciona 
                //NO BORRAR POR FAVOR
              /*const user = {id: "1", name: "isabel", email: "isa@mail.com", password: "12345", rol: "terapeuta"}
                if(credentials?.email === user.email && credentials?.password === user.password){
                    return user;
              }else{
                return null;
              }*/

              {await connectDB();
              try {
                const user = await User.findOne({ correo: credentials.email });
                if (user && user.contrasena === credentials.password) {
                    // La contraseña coincide, puedes devolver el usuario
                    return user;
                } else {
                    // La contraseña no coincide
                    return null;
                }
              } catch (err: any) {
                throw new Error(err);
              }}  
            },
          })
    ],
    callbacks: {
        //NO BORRAR ESTA EN PRUEBA
       /* async jwt({ token, user }){
            if(user) token.rol = user.rol
            return token
        },
        //usar el rol en componentes de cliente
        async session({ session, token}){
            if(session?.user) session.user.rol = token.rol
            return session
        }*/
        async signIn({user, account}) {
            if (account?.provider === 'credentials') {
                return true;
            }
            if (account && account.provider === 'google') {
                const {name, email} = user;
                try {
                    const res = await fetch('http://localhost:3000/api/usuarios', { //http://localhost:3000/api/usuarios
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            nombre: name,
                            correo: email,
                        }),
                    });
                    if (res.ok) {
                        return true;
                    }
                } catch (error) {
                    console.error(error);
                    return false;
                }
            }
            return true;
        }
    }
});
export {handler as GET, handler as POST};