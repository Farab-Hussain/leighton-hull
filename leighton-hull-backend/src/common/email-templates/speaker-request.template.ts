import { RequestAsSpeaker } from "@prisma/client";

/**
 * Returns an HTML string for the "Speaker Request Received" email.
 *
 * @param senderName - friendly sender name (e.g. "Leighton Hull" or "Leighton Hull Team")
 * @param request - Prisma SpeakerRequest object
 */
export function getSpeakerRequestEmailHtml(senderName: string, request: RequestAsSpeaker): string {
  const submissionDate = request.createdAt;
  const formattedDate = submissionDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Speaker Request Received</title>
  </head>
  <body style="margin:0;padding:0;background:#F5F5F5;font-family:Inter, 'Segoe UI', Roboto, Arial, sans-serif;color:#101C17;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:28px 12px;">
      <tr>
        <td align="center">
          <table width="100%" style="max-width:600px;background:#fff;border-radius:8px;padding:28px;box-shadow:0 2px 8px rgba(16,28,23,0.06);">
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <h1 style="margin:0;font-size:20px;color:#444746;font-weight:700;">Speaker Request Received</h1>
                <p style="margin:8px 0 0 0;font-size:13px;color:#6b6f6e;">
                  Thank you for your interest in having Leighton Hull speak at your event!
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 0;">
                <p style="margin:0;font-size:14px;color:#444746;">Hi ${escapeHtml(request.name)},</p>
                <p style="margin:8px 0 0 0;font-size:14px;color:#444746;">
                  We’ve received your speaker request and our team will review it promptly. Here’s a summary of your submission:
                </p>

                <table style="margin:12px 0 0 0;font-size:14px;color:#444746;width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:4px 0;font-weight:600;width:140px;">Name:</td>
                    <td style="padding:4px 0;">${escapeHtml(request.name)}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-weight:600;">Organization:</td>
                    <td style="padding:4px 0;">${escapeHtml(request.organization)}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-weight:600;">Event Date:</td>
                    <td style="padding:4px 0;">${request.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}</td>
                  </tr>
                  <tr>
                    <td style="padding:4px 0;font-weight:600;">Event Type:</td>
                    <td style="padding:4px 0;">${escapeHtml(request.eventType)}</td>
                  </tr>
                  ${
                    request.message
                      ? `<tr>
                          <td style="padding:4px 0;font-weight:600;">Message:</td>
                          <td style="padding:4px 0;">${escapeHtml(request.message)}</td>
                        </tr>`
                      : ""
                  }
                  <tr>
                    <td style="padding:4px 0;font-weight:600;">Submitted:</td>
                    <td style="padding:4px 0;">${formattedDate}</td>
                  </tr>
                </table>

                <p style="margin:12px 0 0 0;font-size:14px;color:#444746;">
                  We’ll be in touch soon to discuss your event details. Thank you again for your invitation!
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:12px 0 20px 0;" align="center">
                <div style="background:#444746;border-radius:6px;padding:14px;color:#fff;text-align:center;">
                  <p style="margin:0 0 8px 0;font-size:15px;font-weight:600;">Need Assistance?</p>
                  <p style="margin:0;font-size:13px;opacity:0.95;">
                    Contact our team if you have questions or would like to share additional event details.
                  </p>
                  <p style="margin:8px 0 0 0;font-size:13px;">
                    <a href="mailto:support@leightonhull.com" style="color:#fff;text-decoration:underline;">support@leightonhull.com</a>
                    &nbsp;•&nbsp;
                    <span style="color:#fff;">+1 (555) 123-4567</span>
                  </p>
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding-top:14px;font-size:12px;color:#B1B4B3;text-align:center;">
                <div style="border-top:1px solid #E3E5E4;padding-top:14px;">
                  ${escapeHtml(senderName)} &nbsp;•&nbsp; Inspiring Events & Thoughtful Collaboration.
                  <br />
                  <a href="https://www.leightonhull.com" style="color:#B1B4B3;text-decoration:none;">leightonhull.com</a>
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

/** Simple HTML escaper to avoid injection when interpolating user values into email HTML */
function escapeHtml(input: unknown): string {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
