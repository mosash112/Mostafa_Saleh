"use server"

import nodemailer from 'nodemailer';

export default async function sendEmail(name: string, from: string, subject: string, content: string) {
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (error) {
    console.error("SMTP Verification Error:", error);
    return { success: false, message: "Could not connect to the email server. Please check SMTP configuration." };
  }

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
  } catch (error) {
    console.error("Send Email Error:", error);
    return { success: false, message: "Failed to send the email. Please try again later." };
  }
}
