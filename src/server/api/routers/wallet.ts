import { z } from "zod";

import { env } from "@nelver/env.mjs";
import { createTRPCRouter, protectedProcedure } from "@nelver/server/api/trpc";
import { loadWalletInformation } from "@nelver/utils/wallet";
import { Keypair } from "@solana/web3.js";
import { TRPCError } from "@trpc/server";
import * as base58 from "bs58";
import { createCipheriv, createDecipheriv } from "crypto";

const algorithm = "aes-256-cbc"; // Choosing an encryption algorithm
const key = env.WALLET_ENCRYPT_KEY; // Choosing a secret key
const iv = Buffer.from(env.WALLET_ENCRYPT_IV, "hex"); // Generating an initialization vector

// EsvWVst2p6hdG1vWHN1LioAkAdPUwjp9XRVQFFNQ7xqR
// 4HiLY9M2pe1bgJeKwqR4VFhhCx1eJ7TmXpAFDkPopd3QQBVGfwYLJhyMDp4Xht2UEv8BkCwLPzRFodQCTmAcnZdu

function encrypt(text: string) {
  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, "ascii");
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
}

function decrypt(encrypted: string) {
  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(Buffer.from(encrypted, "hex"));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

export const walletRouter = createTRPCRouter({
  create: protectedProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    const newWallet = Keypair.generate();

    const createdWallet = await ctx.prisma.wallet.create({
      data: {
        publicKey: newWallet.publicKey.toBase58(),
        privateKeyHash: encrypt(base58.encode(newWallet.secretKey)),
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

      console.log("foundWallet", privateKey, foundWallet.privateKeyHash);
      console.log("de", decrypt(foundWallet.privateKeyHash));

      if (privateKey !== decrypt(foundWallet.privateKeyHash)) {
        throw new TRPCError({
          message: "Imported private key is invalid",
          code: "BAD_REQUEST",
        });
      }

      const wallet = Keypair.fromSecretKey(base58.decode(privateKey));
      return await loadWalletInformation({ wallet });
    }),
  info: protectedProcedure
    .query(async ({ ctx }) => {
      const foundWallet = await ctx.prisma.wallet.findFirst({
        where: { userId: ctx.session.user.id },
      });

      if (!foundWallet) {
        throw new TRPCError({
          message: "Wallet not found",
          code: "NOT_FOUND",
        });
      }

      const privateKey = decrypt(foundWallet.privateKeyHash);
      const wallet = Keypair.fromSecretKey(base58.decode(privateKey));
      return await loadWalletInformation({ wallet });
    })
});
