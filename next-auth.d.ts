import { DefaultSession, DefaultUser } from "next-auth";
import {JWT, DefaultJWT} from "next-auth/jwt";

declare module "next-auth" {
    interface Session{
        user: {
            id: string,
            rol: string,
        } & DefaultSession
    }
    interface User extends DefaultUser{
        rol: string,
    }
}
declare module "next-auth/jwt"{
    interface JWT extends DefaultJWT {
        rol: string,
    }
}