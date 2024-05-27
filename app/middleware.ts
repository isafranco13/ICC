export { default } from "next-auth/middleware"

/*import { withAuth,  NextRequestWithAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(

  function middleware(req: NextRequestWithAuth) {
        //console.log(req.nextUrl.pathname)
        //console.log(req.nextauth.token)

        if(req.nextUrl.pathname.startsWith("/usuario") 
        && req.nextauth.token?.rol !== "terapeuta" && req.nextauth.token?.rol !== "admin"){
            return NextResponse.rewrite(
                new URL("/signin", req.url)
            )
        }
        if(req.nextUrl.pathname.startsWith("/terapeuta") 
        && req.nextauth.token?.rol !== "terapeuta" && req.nextauth.token?.rol !== "admin"){
            return NextResponse.rewrite(
                new URL("/signin", req.url)
            )
        }
        if(req.nextUrl.pathname.startsWith("/admin") 
        && req.nextauth.token?.rol !== "terapeuta" && req.nextauth.token?.rol !== "usuario"){
            return NextResponse.rewrite(
                new URL("/signin", req.url)
            )
        }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)*/
export const config = { matcher: ["/admin", "/usuario", "/terapeuta", "/signin", "/singup"] } 