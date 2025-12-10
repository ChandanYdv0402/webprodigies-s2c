import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "./_generated/server";

export const getCurrentUser = query({
    args: {},
    handler: async (ctx) => {
        const UserId = await getAuthUserId(ctx)
        if (!UserId) return null
        return await ctx.db.get(UserId)

    }
})