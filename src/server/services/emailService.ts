import { env } from "@nelver/env.mjs";
import nodemailer from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

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
  body: string;
  bodyHtml: string;
};

export const sendMail = async ({ from, toAddresses, subject, body, bodyHtml }: Partial<SendMailInput>) => {
  const info = await emailTransporter.instance.sendMail({
    from, // sender address
    to: toAddresses, // list of receivers
    subject, // Subject line
    text: body, // plain text body
    html: bodyHtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
