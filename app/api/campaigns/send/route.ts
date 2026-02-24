import { NextResponse } from "next/server";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  const { subject, content, recipients } = await req.json();

  for (const email of recipients) {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject,
      html: content,
    });
  }

  return NextResponse.json({ message: "Emails Sent Successfully" });
}