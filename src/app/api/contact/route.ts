import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, company, category, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const categoryLabels: Record<string, string> = {
      partnership: "Partnership Inquiries",
      investor: "Investor Relations",
      enterprise: "Enterprise Solutions",
      global: "Global Expansion",
      general: "General Inquiry",
    };

    const subject = `[Nuvreon] ${categoryLabels[category] || "Inquiry"} from ${name}`;

    await transporter.sendMail({
      from: `"Nuvreon Website" <${process.env.SMTP_USER}>`,
      to: "sp.hwang@hantech.io",
      replyTo: email,
      subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #3b82f6;">New Inquiry - ${categoryLabels[category] || "General"}</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
            <tr><td style="padding: 8px 0; color: #666; width: 100px;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
            ${company ? `<tr><td style="padding: 8px 0; color: #666;">Company</td><td style="padding: 8px 0;">${company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; color: #666;">Category</td><td style="padding: 8px 0;">${categoryLabels[category] || category}</td></tr>
          </table>
          <div style="padding: 16px; background: #f5f5f5; border-radius: 8px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
