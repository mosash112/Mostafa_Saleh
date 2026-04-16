"use server"

import nodemailer from 'nodemailer';

export default async function sendEmail(name: string, from: string, subject: string, content: string) {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    pool: true, // Serverless stability
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Prevents certificate handshake failures in shared cloud environments
    },
  });

  try {
    await transport.sendMail({
      from: from,
      to: process.env.SMTP_USER,
      subject,
      html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name} (${from})</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <div style="border-top: 1px solid #eee; padding-top: 10px; margin-top: 10px;">
        ${content}
      </div>
      `,
    });
    return { success: true, message: "Thank you! Your message has been sent successfully." };
  } catch (error: any) {
    console.error("Deep SMTP Error:", error);
    // Return specific error message for cloud debugging
    const errorMessage = error?.message || "Unknown SMTP Error";
    return { 
      success: false, 
      message: `Failed to connect/send: ${errorMessage}. Please verify Vercel SMTP variables.` 
    };
  }
}
