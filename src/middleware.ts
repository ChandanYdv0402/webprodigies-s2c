import { convexAuthNextjsMiddleware, createRouteMatcher, nextjsMiddlewareRedirect } from "@convex-dev/auth/nextjs/server";
import { isBypassRoutes, isPublicRoutes } from "./lib/permissions";
 

const BypassMatcher = createRouteMatcher(isBypassRoutes);
const PublicMatcher = createRouteMatcher(isPublicRoutes);

export default convexAuthNextjsMiddleware(async (request, {convexAuth}) => {
  if(BypassMatcher(request)) {
    return ;
  }
  const authed = await convexAuth.isAuthenticated();
  if(PublicMatcher(request)&& authed){
    return nextjsMiddlewareRedirect(request, '/dashboard')
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};