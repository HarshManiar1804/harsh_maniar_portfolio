import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SENDER_USER,
    pass: process.env.NEXT_PUBLIC_SENDER_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // ✅ Fixed validation condition
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required!" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_SENDER_USER,
      to: process.env.NEXT_PUBLIC_RECIEVER_USER,
      subject: "Message from portfolio",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form Submitted Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error while submitting contact form", error);
    return NextResponse.json(
      { message: "Internal server error!" },
      { status: 500 }
    );
  }
}
