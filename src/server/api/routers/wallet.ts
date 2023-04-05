import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@nelver/server/api/trpc";
import { compare, hash } from "@nelver/utils/auth";
import { loadWalletInformation } from "@nelver/utils/wallet";
import { Keypair } from "@solana/web3.js";
import { TRPCError } from "@trpc/server";
import * as base58 from "bs58";

export const walletRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const newWallet = Keypair.generate();
    const createdWallet = await ctx.prisma.wallet.create({
      data: {
        publicKey: newWallet.publicKey.toBase58(),
        privateKeyHash: await hash(base58.encode(newWallet.secretKey)),
        user: { connect: { id: userId } },
      },
    });

    return {
      publicKey: createdWallet.publicKey,
      privateKey: base58.encode(newWallet.secretKey),
    };
  }),
  import: protectedProcedure
    .input(z.object({ privateKey: z.string() }))
    .mutation(async ({ ctx, input: { privateKey } }) => {
      const foundWallet = await ctx.prisma.wallet.findFirst({
        where: { userId: ctx.session.user.id },
      });

      if (!foundWallet) {
        throw new TRPCError({
          message: "Wallet not found",
          code: "NOT_FOUND",
        });
      }

      if (!(await compare(privateKey, foundWallet.privateKeyHash))) {
        throw new TRPCError({
          message: "Imported private key is invalid",
          code: "BAD_REQUEST",
        });
      }

      const wallet = Keypair.fromSecretKey(base58.decode(privateKey));
      return await loadWalletInformation({ wallet });
    }),
});
