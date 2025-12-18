import { v } from "convex/values"
import { query, mutation } from "./_generated/server"
import { getAuthUserId } from "@convex-dev/auth/server"

export const getProject = query({
    args: { projectId: v.id('projects') },
    handler: async (ctx, { projectId }) => {
        const userId = await getAuthUserId(ctx)
        if (!userId) throw new Error('Not authenticated')

        const project = await ctx.db.get(projectId)
        if (!project) throw new Error('Project not found')



        // Check ownership or public access
        if (project.userId !== userId && !project.isPublic) {
            throw new Error('Access denied')
        }
        return project
    },
})

export const create = mutation({
    args: { name: v.string() },
    handler: async (ctx, { name }) => {
        const userId = await getAuthUserId(ctx);
        if (!userId) throw new Error("Not authenticated");

        const projectId = await ctx.db.insert("projects", {
            name,
            userId,
            createdAt: Date.now(),
            isPublic: false,
        });
        return projectId;
    },
});
