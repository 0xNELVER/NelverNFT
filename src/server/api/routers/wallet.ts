import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@nelver/server/api/trpc";
import { compare, hash } from "@nelver/utils/auth";
import { TRPCError } from "@trpc/server";
import { Connection, clusterApiUrl, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import * as base58 from "bs58";
import { env } from "@nelver/env.mjs";

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
        .input(
            z.object({
                privateKey: z.string()
            })
        )
        .mutation(async ({ ctx, input: { privateKey } }) => {
            const userId = ctx.session.user.id;
            const foundWallet = await ctx.prisma.wallet.findFirst({
                where: {
                    userId
                }
            });

            if (!foundWallet) {
                throw new TRPCError({
                    message: "Wallet not found",
                    code: "NOT_FOUND"
                });
            }

            if (!(await compare(privateKey, foundWallet.privateKeyHash))) {
                throw new TRPCError({
                    message: "Imported private key is invalid",
                    code: "BAD_REQUEST"
                });
            }

            const wallet = Keypair.fromSecretKey(base58.decode(privateKey));
            return await loadWalletInformation(wallet);
        })
});

type WalletInfo = {
    address: string,
    solBalance: number
}

const loadWalletInformation = async (wallet: Keypair) : Promise<WalletInfo> => {
    const connection = new Connection(clusterApiUrl(env.SOLANA_CLUSTER));

    const balance = await connection.getBalance(wallet.publicKey);
    const pubKey = wallet.publicKey.toBase58();

    return {
        address: pubKey.substring(0, 4) + "..." + pubKey.substring(pubKey.length - 4, pubKey.length - 1),
        solBalance: balance / LAMPORTS_PER_SOL
    }
}