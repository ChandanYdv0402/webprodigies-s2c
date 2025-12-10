export const isProtectedRoutes = ['/dashboard(.*)']
export const isPublicRoutes = ['/auth(.*)', '/']
export const isBypassRoutes = [
    "/api/polar/webhook(.*)",
    "/api/auth(.*)",
    "/api/inngest(.*)",
    "/convex(.*)",
]