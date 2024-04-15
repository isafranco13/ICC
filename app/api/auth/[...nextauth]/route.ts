import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/libs/mongodb";
import User from "@/models/usuarios";
import { GoogleProfile } from 'next-auth/providers/google';


const handler = NextAuth ({   //const handler = NextAuth({ -> lo que estaba antes
    providers: [ GoogleProvider ({
        profile(profile:GoogleProfile){
            return{
                ...profile,
                role: "usuario",
                id: profile.sub,
            }
        },
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

            {
              await connectDB();
              try {
                
                const user = await User.findOne({ correo: credentials.email });
                if (user && user.contrasena === credentials.password) {
                    // La contraseña coincide, puedes devolver el usuario
                    //console.log(user);
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
        
        async signIn({user, account}) {
            if (account?.provider === 'credentials') {
                console.log(user);
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
                            role:  "usuario",
                        }),
                    });
                    if (res.ok) {
                        console.log(user)
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