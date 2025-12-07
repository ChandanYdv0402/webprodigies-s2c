import { convexAuthNextjsMiddleware, createRouteMatcher } from "@convex-dev/auth/nextjs/server";
import { isBypassRoutes } from "./lib/permissions";
 

const BypassMatcher = createRouteMatcher(isBypassRoutes);
export default convexAuthNextjsMiddleware(async (request, {convexAuth}) => {
  if(BypassMatcher(request)) {
    return ;
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};