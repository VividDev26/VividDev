export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, type, message } = await request.json();

    console.log("Attempting to send email...");
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_APP_PASS exists:", !!process.env.GMAIL_APP_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    await transporter.verify();
    console.log("Transporter verified!");

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Vivid Dev: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #26215C;">
          <h2>New Contact Form Submission</h2>
          <hr style="border: 0.5px solid #E2E0F7; margin-bottom: 20px;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Requested:</strong> ${type}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #F8F7FF; padding: 15px; border-radius: 8px; border: 0.5px solid #E2E0F7;">
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Nodemailer error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}