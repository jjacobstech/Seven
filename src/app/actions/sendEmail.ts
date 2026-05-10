"use server";

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  message?: string;
  date?: string;
  time?: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

export async function sendBookingEmail(
  data: BookingFormData
): Promise<SendEmailResult> {
  try {
    // Validate required fields
    if (!data.firstName || !data.lastName || !data.email) {
      return { success: false, error: "Please fill in all required fields." };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return { success: false, error: "Please enter a valid email address." };
    }

    // Build email body
    const servicesText =
      data.services.length > 0 ? data.services.join(", ") : "Not specified";

    const emailBody = `
New Booking Request — Seven Innovative

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Company/Brand: ${data.company || "Not provided"}

Services Needed: ${servicesText}
Message: ${data.message || "None"}

Preferred Date: ${data.date || "Not selected"}
Preferred Time: ${data.time || "Not selected"}
    `.trim();

    // ── Option A: Resend API (recommended) ──────────────────────────────────
    // Uncomment and set RESEND_API_KEY in .env.local to use Resend:
    //
    // const response = await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "bookings@seveninnovative.com",
    //     to: ["Createwithseven@gmail.com"],
    //     subject: `New Call Booking — ${data.firstName} ${data.lastName}`,
    //     text: emailBody,
    //   }),
    // });
    // if (!response.ok) {
    //   const err = await response.text();
    //   console.error("Resend error:", err);
    //   return { success: false, error: "Failed to send email. Please try again." };
    // }

    // ── Option B: Nodemailer (SMTP) ──────────────────────────────────────────
    // Uncomment to use SMTP (set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env.local):
    //
    // const nodemailer = require("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   secure: true,
    //   auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    // });
    // await transporter.sendMail({
    //   from: `"Seven Innovative" <${process.env.SMTP_USER}>`,
    //   to: "Createwithseven@gmail.com",
    //   subject: `New Call Booking — ${data.firstName} ${data.lastName}`,
    //   text: emailBody,
    // });

    // ── Development: log to console ─────────────────────────────────────────
    // Remove in production when using Resend or Nodemailer above.
    console.log("📧 New Booking Submission:");
    console.log(emailBody);

    return { success: true };
  } catch (error) {
    console.error("sendBookingEmail error:", error);
    return {
      success: false,
      error: "Something went wrong. Please try again or email us directly.",
    };
  }
}
