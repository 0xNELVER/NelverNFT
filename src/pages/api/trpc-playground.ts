// pages/api/trpc-playground.ts
import { appRouter } from "@nelver/server/api/root";
import { type NextApiHandler } from "next";
import { nextHandler } from "trpc-playground/handlers/next";

const setupHandler = nextHandler({
  router: appRouter,
  trpcApiEndpoint: "/api/trpc",
  playgroundEndpoint: "/api/trpc-playground",
  request: {
    superjson: true,
  },
});

const handler: NextApiHandler = async (req, res) => {
  if (process.env.NODE_ENV === "production") return res.status(404).end();

  const playgroundHandler = await setupHandler;
  await playgroundHandler(req, res);
};

export default handler;
