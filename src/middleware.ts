import { NextResponse } from "next/server"
export function middleware(request: Request) {

    const origin = request.headers.get('origin')
    console.log("🚀 ~ origin:", origin)

    return NextResponse.next()
}

export const config = {
    matcher: '/api/:path*' //el middleware se va a ejecutar solo en las peticiones a la API
}
    
