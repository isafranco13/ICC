//export { default } from "next-auth/middleware"
//NO BORRAR ESTA EN PRUEBA
/*import { withAuth,  NextRequestWithAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // 'withAuth augments your 'request' with the user's token
    function middleware(request: NextRequestWithAuth){
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth.token)

        if(request.nextUrl.pathname.startsWith("/usuario") 
        && request.nextauth.token?.rol !== "usuario"){
            return NextResponse.rewrite(
                new URL("/signin", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
    
)*/
import { withAuth,  NextRequestWithAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(

  function middleware(req: NextRequestWithAuth) {
    console.log(req.nextUrl.pathname)
        //console.log(req.nextauth.token)

        if(req.nextUrl.pathname.startsWith("/usuario") 
        && req.nextauth.token?.rol !== "terapeuta"){
            return NextResponse.rewrite(
                new URL("/signin", req.url)
            )
        }
    /*if (req.nextauth.token?.role !== "usuario") {
      console.log("No eres un usuario")
      return NextResponse.rewrite(
        new URL("/signin", req.url)
      )
    }*/
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)
export const config = { matcher: ["/admin", "/usuario", "/terapeuta", "/signin", "/singup"] } //matcher: ["/admin", "/usuario", "/terapeuta", "/signin", "/singup"]