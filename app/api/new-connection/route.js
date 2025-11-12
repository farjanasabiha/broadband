// app/api/new-connection/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, address, mapLink, service, date, message } = body || {};

    // Basic validation
    if (!name || !email || !phone || !address) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: name, email, phone, address",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: "Invalid email format",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return new Response(
        JSON.stringify({
          error: "Invalid phone number format",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter config
    try {
      await transporter.verify();
    } catch (verifyErr) {
      console.error("SMTP verify failed:", verifyErr);
      return new Response(
        JSON.stringify({
          error: "Email service temporarily unavailable. Please try again later.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Build email content for new connection request
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.WEBSITE_OWNER_EMAIL,
      subject: `New Connection Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff0033; border-bottom: 2px solid #ff0033; padding-bottom: 10px;">
            New Connection Request
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Address:</strong> ${escapeHtml(address)}</p>
            ${mapLink ? `<p><strong>Google Map Link:</strong> <a href="${escapeHtml(mapLink)}" target="_blank">View Location</a></p>` : ''}
          </div>

          <div style="background-color: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Service Details</h3>
            ${service ? `<p><strong>Service Type:</strong> ${escapeHtml(service)}</p>` : ''}
            ${date ? `<p><strong>Preferred Installation Date:</strong> ${escapeHtml(date)}</p>` : ''}
            ${message ? `<p><strong>Additional Message:</strong><br/>${escapeHtml(message)}</p>` : ''}
          </div>

          <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0;"><strong>Action Required:</strong> Please contact the customer within 24 hours to discuss the connection details and schedule installation.</p>
          </div>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("New connection request sent:", info.messageId);

    return new Response(
      JSON.stringify({ 
        message: "Connection request submitted successfully! We'll contact you within 24 hours.",
        success: true 
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("New connection API error:", error);
    return new Response(
      JSON.stringify({
        message: "Failed to submit connection request. Please try again.",
        error: error?.message || null,
        success: false
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

// Helper function to escape HTML and prevent XSS
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
