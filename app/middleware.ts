//export { default } from "next-auth/middleware"
import { withAuth,  NextRequestWithAuth} from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // 'withAuth augments your 'request' with the user's token
    function middleware(request: NextRequestWithAuth){
        console.log(request.nextUrl.pathname)
        console.log(request.nextauth.token)

        if(request.nextUrl.pathname.startsWith("/dashboardU") 
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
    
)

export const config = { matcher: ["/dashboard", "/admin", "/dashboard_U", "/dashboard_tera", "/signin", "/singup"] }