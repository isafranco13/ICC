import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"
import { User } from "@auth/core/types"

declare module "next-auth" {
  interface Session {
    user: {
      name: string,
      role: string,
    } & DefaultSession
  }

  interface User extends DefaultUser {
    name: string,
    role: string,
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    name: string,
    role: string,
  }
}

declare module "@auth/core/types" {
  interface User {
    name: string,
    role: string,
  }
}