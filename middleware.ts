import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ['/', '/api/webhooks/clerk', '/api/webhooks/stripe'],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next|favicon.ico).*)", "/", "/(api|trpc)(.*)"],
};
