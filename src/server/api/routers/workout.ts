import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import Workout from '~/types/Workout'

export const workoutRouter = createTRPCRouter({
  read: protectedProcedure
    .input( z.string() )
    .query( ({ctx, input}) => {
      console.log(input)
      return ctx.prisma.workout.findUnique({
        where: { id: input }
      })
    }),

  getAll: protectedProcedure
    .query(({ctx}) => {
      return ctx.prisma.workout.findMany();
    }),

  create: publicProcedure
    .mutation(({ctx}) => {
      return ctx.prisma.workout.create({data: 
        {
          user: ctx.session.user.id,
        }
      });
    })
});
