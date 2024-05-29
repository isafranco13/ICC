import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"
import { User } from "@auth/core/types"

declare module "next-auth" {
  interface Session {
    user: {
      id: string,
      name: string,
      roles: string[],
    } & DefaultSession
  }

  interface User extends DefaultUser {
    id: string,
    name: string,
    roles: string[],
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string,
    name: string,
    roles: string[],
  }
}

declare module "@auth/core/types" {
  interface User {
    id: string,
    name: string,
    roles: string[],
  }
}