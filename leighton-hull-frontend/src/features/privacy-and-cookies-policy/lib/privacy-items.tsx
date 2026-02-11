import Link from "next/link";
import React from "react";

export const privacyItems = [
  {
    title: "1. Introduction",
    content: `This Privacy & Cookies Policy explains how we collect, use, and protect your personal information when you visit
      leightonhull.com. By using this website, you consent to the practices described herein.`
  },
  {
    title: "2. Information We Collect",
    content: `We may collect personal information you voluntarily provide through forms (e.g., name, email address), as well as
      technical data like IP addresses through standard analytics tools.`
  },
  {
    title: "3. Use of Information",
    content: `Information is used to respond to inquiries, manage event communications, and improve user experience. We do not sell
      your information to third parties.`
  },
  {
    title: "4. Cookies and Tracking Technologies",
    content: `This website uses cookies to understand how visitors interact with the site and to optimize performance. You may disable
      cookies in your browser settings if desired.`
  },
  {
    title: "5. Sharing of Information",
    content: `We may share limited data with service providers like website analytics tools (e.g., Google Analytics). These partners
      are required to uphold confidentiality and data protection standards.`
  },
  {
    title: "6. Data Security",
    content: `We implement reasonable safeguards to protect your data from unauthorized access, misuse, or disclosure. However, no
      online system can be guaranteed to be 100% secure.`
  },
  {
    title: "7. Your Rights",
    content: `You may request access, correction, or deletion of your personal data by contacting us directly. We will respond to such
      requests in accordance with applicable laws.`
  },
  {
    title: "8. Policy Updates",
    content: `We may update this Privacy & Cookies Policy periodically. Changes will be posted on this page with an updated effective
      date.`
  },
  {
    title: "9. Contact",
    content: (
      <>
        For questions about this policy or to request information, please contact us at{" "}
        <Link href={"mailto:info@leightonhull.com"} className="text-p3-poppins-bold">
          info@leightonhull.com
        </Link>
        .
      </>
    )
  }
];
