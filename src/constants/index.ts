/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

import type { Preset } from "../types";

export const presets: Preset[] = [
  {
    template: "Website URL",
    placeholder: "https://example.com",
  },
  {
    template: "Contact card",
    placeholder:
      "BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nTEL:+1234567890\nEMAIL:john@example.com\nEND:VCARD",
  },
  {
    template: "Plain Text",
    placeholder: "Hello World! This is a test QR code.",
  },
  {
    template: "UPI id",
    placeholder: "upi://pay?pa=name@bank&pn=John Doe&cu=INR",
  },
  {
    template: "WIFI Network",
    placeholder: "WIFI:S:MyWiFi;T:WPA;P:mypassword123;;",
  },
  {
    template: "Email Link",
    placeholder:
      "mailto:someone@example.com?subject=Hello&body=This is a QR code for email.",
  },
];
