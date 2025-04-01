import { auth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

console.log("in middleware")
const isProtectedRoute = createRouteMatcher(["/mock-users"])

export default clerkMiddleware(async (auth, req) => {
  console.log("in clerkMiddleware 1")
  if (isProtectedRoute(req)) await auth.protect();
  console.log("in clerkMiddleware 2")
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
