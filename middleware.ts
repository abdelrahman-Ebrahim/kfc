import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  console.log("Middleware Token:", token); // Log the token
  console.log("Request Cookies:", request.cookies.getAll()); // Log all cookies

  // List of auth pages
  const authPages = [
    "/login",
    "/register",
    "/changepassword",
    "/forgotpassword",
    "/otp",
    "/resetsuccess",
    "/verifycode",
  ];

  // If the user is authenticated and tries to access an auth page, redirect to home
  if (token && authPages.includes(pathname)) {
    console.log("User is authenticated, redirecting to /");
    return NextResponse.redirect(new URL("/", request.url));
  }

  // If the user is not authenticated and tries to access a protected page, redirect to login
  if (!token && !authPages.includes(pathname)) {
    console.log("No token found, redirecting to /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to proceed
  console.log("Token found, allowing access");
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|navIcons/globe.svg|auth/gridMdBackground.svg|auth/Tick.svg|auth/miniGridBg.svg|auth/key.svg|auth/mail.svg|auth/success.svg|auth/UploadIcon.svg|fonts/NotoSansArabic-Bold.ttf|fonts/NotoSansArabic-ExtraBold.ttf|fonts/NotoSansArabic-ExtraLight.ttf|fonts/NotoSansArabic-Light.ttf|fonts/NotoSansArabic-Medium.ttf|fonts/NotoSansArabic-Regular.ttf|fonts/NotoSansArabic-Thin.ttf).*)",
  ],
};