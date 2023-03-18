import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@nelver/server/api/trpc";
import { hashPassword } from "@nelver/utils/auth";
import { sendMail } from "@nelver/server/services/emailService";
import { env } from "@nelver/env.mjs";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().transform(async (pwd) => await hashPassword(pwd)),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await sendMail({ from: env.EMAIL_FROM, toAddresses: ['zinbac000@gmail.com', 'hoanghai129612@gmail.com'], subject: 'Test email', body: 'Test only', bodyHtml: '<p>Test email</p>'});

      // const user = ctx.prisma.user.create({
      //   data: input,
      // });

      // const randomString = crypto.randomUUID();

      // generate verification code, hash this code and create verification token for this user with expires time
      // send email verification link for user.
      // verification link will link to a page to pass verify token, identifier to api verify email.

      return;
    }),
});
