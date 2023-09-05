import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  console.log("hostname", request.nextUrl.host);

  const host = request.nextUrl.host;

  if (host === "https://beta.nextjs.org")
    return NextResponse.redirect("https://beta.nextjs.org");

  return NextResponse.next();
}

// Stop Middleware running on static files and public folder
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next
     * - static (static files)
     * - favicon.ico (favicon file)
     * - public folder
     * - public folder
     */
    "/((?!static|.*\\..*|_next|favicon.ico).*)",
    "/",
  ],
};