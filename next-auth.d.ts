import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"
import { User } from "@auth/core/types"

declare module "next-auth" {
  interface Session {
    user: {
      name: string,
      roles: string[],
    } & DefaultSession
  }

  interface User extends DefaultUser {
    name: string,
    roles: string[],
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    name: string,
    roles: string[],
  }
}

declare module "@auth/core/types" {
  interface User {
    name: string,
    roles: string[],
  }
}