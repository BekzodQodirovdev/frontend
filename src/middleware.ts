import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const serverCookie = cookies();

  if (
    request.nextUrl.pathname.startsWith("/profile") &&
    !(await serverCookie).get("token")
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }


  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
