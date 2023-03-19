import { env } from "@nelver/env.mjs";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

const EMAIL_VERIFICATION_LINK_SUBJECT = "Verify your email address";

class EmailTransporter {
  transporter: nodemailer.Transporter<SMTPTransport.SentMessageInfo> | null = null;

  get instance() {
    if (this.transporter === null) {
      this.transporter = nodemailer.createTransport({
        host: env.EMAIL_SERVER_HOST,
        port: parseInt(env.EMAIL_SERVER_PORT, 10),
        secure: true, // true for 465, false for other ports
        auth: { user: env.EMAIL_SERVER_USER, pass: env.EMAIL_SERVER_PASSWORD },
      });
    }

    return this.transporter;
  }
}

const emailTransporter = new EmailTransporter();

type SendMailInput = {
  from: string;
  toAddresses: string[];
  subject: string;
  body?: string;
  bodyHtml?: string;
};

const sendMail = async ({ from, toAddresses, subject, body, bodyHtml }: SendMailInput) => {
  return await emailTransporter.instance.sendMail({
    from, // sender address
    to: toAddresses, // list of receivers
    subject, // Subject line
    text: body, // plain text body
    html: bodyHtml, // html body
  });
};

type SendVerificationLinkEmailInput = {
  recipient: string;
  verificationUrl: string;
};

export const sendVerificationLinkEmail = async ({ recipient, verificationUrl }: SendVerificationLinkEmailInput) => {
  const bodyHtml = `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Email Verification</title>
    </head>
    <body>
      <h1>Verify Your Email Address</h1>
      <p>Thank you for registering with us! To complete your registration and verify your email address, please click the button below:</p>
      <a href="${verificationUrl}"><button style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px;">Verify Email Address</button></a>
      <p>If the button above does not work, please copy and paste the following link into your web browser:</p>
      <p>${verificationUrl}</p>
      <p>Thank you for joining us!</p>
    </body>
  </html>`;

  return await sendMail({
    from: env.EMAIL_FROM,
    toAddresses: [recipient],
    subject: EMAIL_VERIFICATION_LINK_SUBJECT,
    bodyHtml,
  });
};
