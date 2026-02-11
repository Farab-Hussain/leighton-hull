import { RequestAsSpeaker } from "@prisma/client";

/**
 * Returns an HTML string for the admin notification email when a visitor submits a speaker request.
 *
 * @param adminName - friendly name for the admin (e.g. "Leighton Hull" or "Admin Team")
 * @param request - Prisma SpeakerRequest object
 */
export function getAdminSpeakerRequestEmailHtml(adminName: string, request: RequestAsSpeaker): string {
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
    <title>New Speaker Request</title>
  </head>
  <body style="margin:0;padding:0;background:#F5F5F5;font-family:Inter, 'Segoe UI', Roboto, Arial, sans-serif;color:#101C17;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="padding:28px 12px;">
      <tr>
        <td align="center">
          <table width="100%" style="max-width:600px;background:#fff;border-radius:8px;padding:28px;box-shadow:0 2px 8px rgba(16,28,23,0.06);">
            <tr>
              <td align="center" style="padding-bottom:20px;">
                <h1 style="margin:0;font-size:20px;color:#444746;font-weight:700;">New Speaker Request</h1>
                <p style="margin:8px 0 0 0;font-size:13px;color:#6b6f6e;">
                  A visitor has submitted a speaker request through your website. Here are the details:
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:18px 0;">
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
                    <td style="padding:4px 0;">${escapeHtml(request.date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))}</td>
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
                  You can review this request and reach out to the requester for more information or confirmation.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding-top:14px;font-size:12px;color:#B1B4B3;text-align:center;">
                <div style="border-top:1px solid #E3E5E4;padding-top:14px;">
                  ${escapeHtml(adminName)} &nbsp;•&nbsp; Speaker Request Notifications.
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
function escapeHtml(input: string) {
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
