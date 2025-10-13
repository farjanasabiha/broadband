// app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, address, service, message } = body || {};

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: name, email, message",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create transporter using Gmail SMTP (explicit host/port/secure)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter config (helps surface auth/connection errors early)
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error("SMTP verify failed:", verifyErr);
      return new Response(
        JSON.stringify({
          error: "SMTP connection/auth failed. Check EMAIL_USER/EMAIL_PASS.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Build email. Use authenticated user as `from` to avoid provider rejection.
    const mailOptions = {
      from: process.env.EMAIL_USER, // must be the authenticated account
      replyTo: email, // user's email so owner can reply
      to: process.env.WEBSITE_OWNER_EMAIL, // receiver (website owner)
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "")}</p>
        <p><strong>Address:</strong> ${escapeHtml(address || "")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message)}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);

    return new Response(
      JSON.stringify({ message: "Message sent to website owner!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to send message",
        error: error?.message || null,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// small helper to avoid injecting raw HTML if fields contain markup
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
