import { createTRPCRouter } from "@nelver/server/api/trpc";
import { authRouter } from "@nelver/server/api/routers/auth";
import { walletRouter } from "@nelver/server/api/routers/wallet";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  wallet: walletRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
