import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@nelver/server/api/trpc";
import { sendVerificationLinkEmail } from "@nelver/server/services/emailService";
import { getBaseUrl } from "@nelver/utils/api";
import { compare, hash } from "@nelver/utils/auth";
import { extdDayjs } from "@nelver/utils/dayjs-extended";
import { TRPCError } from "@trpc/server";
import crypto from "crypto";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().transform(async (pwd) => await hash(pwd)),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const existingUser = await ctx.prisma.user.findUnique({
        where: { email: input.email },
      });

      if (existingUser) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Email already exists!" });
      }

      const user = await ctx.prisma.user.create({
        data: input,
      });

      const verificationToken = crypto.randomUUID();
      const verificationTokenHash = await hash(verificationToken);

      await ctx.prisma.verificationToken.create({
        data: {
          token: verificationTokenHash,
          expires: extdDayjs().add(1, "day").toDate(),
          identifier: user.id,
        },
      });

      await sendVerificationLinkEmail({
        recipient: user.email,
        verificationUrl: `${getBaseUrl()}/auth/verify?token=${verificationToken}&id=${user.id}`,
      });

      return;
    }),
  verifyEmail: publicProcedure
    .input(
      z.object({
        token: z.string().uuid(),
        userId: z.string().uuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const verificationTokens = await ctx.prisma.verificationToken.findMany({
        where: {
          identifier: input.userId,
        },
      });

      const now = extdDayjs().toDate();

      const foundToken = verificationTokens.find(async ({ token }) => await compare(input.token, token));

      if (!foundToken) {
        throw new TRPCError({ code: "NOT_FOUND", message: "No verification token found!" });
      }

      if (foundToken.expires <= now) {
        await ctx.prisma.verificationToken.delete({
          where: { token: input.token },
        });
        throw new TRPCError({ code: "BAD_REQUEST", message: "Your email verification link expired!" });
      }

      await ctx.prisma.verificationToken.delete({
        where: { token: foundToken.token },
      });

      await ctx.prisma.user.update({
        where: { id: input.userId },
        data: { emailVerified: now },
      });

      return "Email verified! You can now sign in.";
    }),
});
