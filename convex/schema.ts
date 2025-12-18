import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  projects: defineTable({
    name: v.string(),
    userId: v.id("users"),
    isPublic: v.optional(v.boolean()),
    createdAt: v.number(),
    sketchesData: v.any(),
    thumbnail: v.optional(v.string()),
    projectNumber: v.number(),
    lastModified: v.number(),
  }),
  subscriptions: defineTable({
    userId: v.id("users"),
    status: v.string(),
    currentPeriodEnd: v.optional(v.number()),
    planId: v.optional(v.string()),
  }).index("by_userId", ["userId"]),
  project_counters: defineTable({
    userId: v.id("users"),
    nextProjectNumber: v.number(),
  }).index("by_userId", ["userId"]),
});

export default schema;