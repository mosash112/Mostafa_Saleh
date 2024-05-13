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

  var to = process.env.SMTP_USER;

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: from,
      to,
      subject,
      html: `
      <h2>from: ${name}</h2>
      <h3>email: ${from}</h3>
      <h3>subject: ${subject}</h3>
      <p>${content}</p>
      `,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}
