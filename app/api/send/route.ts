import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, type, message } = await request.json();

    // Create the reusable transport carrier using Gmail's free SMTP server
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // 👈 Sends the notification straight back to yourself
      replyTo: email, // 👈 Clicking "Reply" in your email app will automatically reply to the lead!
      subject: `🔥 New VividDev Lead: ${name}`,
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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}