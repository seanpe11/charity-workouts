import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const workoutRouter = createTRPCRouter({
  read: protectedProcedure
    .input( z.string() )
    .query( ({ctx, input}) => {
      console.log(input)
      return ctx.prisma.workout.findUnique({
        where: { id: parseInt(input) }
      })
    }),

  getAll: protectedProcedure
    .query(({ctx}) => {
      return ctx.prisma.workout.findMany();
    }),

  create: protectedProcedure
    .input(
      z.object(
        {
            exercise: z.string(),
            reps: z.number(),
            sets: z.number(),
            weight: z.number()
        }
      )
      .array()
    )
    .mutation(({ctx, input}) => {
      return ctx.prisma.workout.create({data: 
        {
          user: ctx.session.user.id,
          exercises: input
        }
      });
    })
});
