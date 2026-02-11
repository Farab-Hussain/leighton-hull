/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";
import { SendEmailFailedException } from "@/features/resend/exceptions";
import { SendEmailInput } from "@/features/resend/resend.service.types";

@Injectable()
export class ResendService {
  constructor(private configService: ConfigService) {}

  async sendEmail({ subject, content, receiver }: SendEmailInput): Promise<void> {
    const smtpHost = process.env.SMTP_HOST || this.configService.get<string>("SMTP_HOST") || "";
    const smtpPortRaw = process.env.SMTP_PORT || this.configService.get<string>("SMTP_PORT") || "";
    const smtpSecureRaw = process.env.SMTP_SECURE || this.configService.get<string>("SMTP_SECURE") || "";
    const smtpUser = process.env.SMTP_USER || this.configService.get<string>("SMTP_USER") || "";
    const smtpPass = process.env.SMTP_PASS || this.configService.get<string>("SMTP_PASS") || "";
    const smtpFrom = process.env.SMTP_FROM || this.configService.get<string>("SMTP_FROM") || "";

    const to = Array.isArray(receiver) ? receiver.join(",") : receiver;

    const fromAddress = smtpFrom || smtpUser;
    const hasSmtp = Boolean(smtpHost && smtpUser && smtpPass);

    console.log("Sending email:", {
      from: fromAddress,
      to,
      subject
    });

    try {
      if (!hasSmtp) {
        throw new Error("Missing SMTP config (SMTP_HOST/SMTP_USER/SMTP_PASS)");
      }

      const smtpPort = smtpPortRaw ? Number(smtpPortRaw) : 587;
      const smtpSecure = smtpSecureRaw ? smtpSecureRaw.toLowerCase() === "true" : smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass
        },
        connectionTimeout: 10000, // 10 seconds
        greetingTimeout: 10000, // 10 seconds
        socketTimeout: 10000 // 10 seconds
      });

      console.log("Transporter created, testing connection...");
      await transporter.verify();
      console.log("SMTP connection verified successfully");

      const result = await transporter.sendMail({
        from: fromAddress,
        to,
        subject,
        html: content
      });

      console.log("Email sent successfully:", {
        messageId: result.messageId,
        accepted: result.accepted,
        rejected: result.rejected
      });
    } catch (error) {
      console.error("SMTP email sending failed:", error);
      throw new SendEmailFailedException();
    }
  }
}
