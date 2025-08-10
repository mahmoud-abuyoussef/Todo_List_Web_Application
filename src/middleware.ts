import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  const isAuthPage = pathname.startsWith("/auth/login");
  const isRegisterPage = pathname.startsWith("/auth/register");
  const isPublicAssets = ["/_next", "/favicon.ico", "/images"].some(prefix => pathname.startsWith(prefix));

  if (isPublicAssets) {
    return NextResponse.next();
  }

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isAuthPage && !token && !isRegisterPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
