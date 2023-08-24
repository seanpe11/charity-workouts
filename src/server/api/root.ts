import { exampleRouter } from "~/server/api/routers/example";
import { workoutRouter } from "~/server/api/routers/workout";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  workout: workoutRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
