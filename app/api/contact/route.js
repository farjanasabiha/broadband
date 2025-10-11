import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, address, service, message } = await req.json();

    // Create transporter using Gmail (or other SMTP)
    const transporter = nodemailer.createTransport({
      service: "gmail", // you can use Outlook, Yahoo, etc.
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // sender (user email)
      to: process.env.WEBSITE_OWNER_EMAIL, // receiver (website owner)
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Message sent to website owner!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
