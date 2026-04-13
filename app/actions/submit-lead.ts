"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const LEAD_EMAIL = process.env.LEAD_EMAIL ?? "al.a.andrad@gmail.com";

export type LeadSource = "contact" | "instant-quote";

export interface LeadResult {
  success: boolean;
  error?: string;
}

export async function submitLead(
  source: LeadSource,
  data: Record<string, string>,
): Promise<LeadResult> {
  const name = data.name ?? "Unknown";
  const phone = data.phone ?? "";
  const email = data.email ?? "";

  const subjectMap: Record<LeadSource, string> = {
    contact: `New Lead (Contact Form): ${name}`,
    "instant-quote": `New Lead (Instant Quote): ${name}`,
  };

  // Build HTML body from all fields
  const rows = Object.entries(data)
    .filter(([, v]) => v.trim() !== "")
    .map(
      ([key, val]) =>
        `<tr>
          <td style="padding:6px 12px;font-weight:600;color:#1E3D30;text-transform:capitalize;white-space:nowrap;vertical-align:top;">${key.replace(/([A-Z])/g, " $1").trim()}</td>
          <td style="padding:6px 12px;color:#374151;">${val}</td>
        </tr>`,
    )
    .join("");

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;">
      <div style="background:#1E3D30;color:white;padding:20px 24px;border-radius:12px 12px 0 0;">
        <h2 style="margin:0;font-size:18px;">New Lead from everpeakroof.com</h2>
        <p style="margin:4px 0 0;opacity:0.7;font-size:13px;">Source: ${source === "instant-quote" ? "Instant Quote Form" : "Contact Form"}</p>
      </div>
      <div style="border:1px solid #E5DDD3;border-top:none;border-radius:0 0 12px 12px;padding:20px 0;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows}
        </table>
      </div>
      <p style="font-size:12px;color:#666;margin-top:16px;">Reply directly to this email to respond to the customer${email ? ` at ${email}` : ""}.</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: "Everpeak Leads <onboarding@resend.dev>",
      to: LEAD_EMAIL,
      replyTo: email || undefined,
      subject: subjectMap[source],
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: "Failed to send. Try calling us instead." };
    }

    return { success: true };
  } catch (err) {
    console.error("Lead submission error:", err);
    return { success: false, error: "Something went wrong. Try calling us instead." };
  }
}
