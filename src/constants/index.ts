/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

import type { ECL, Preset, SizeOfQr } from "../types";

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

export const sizeOfQr: SizeOfQr[] = [
  {
    width: 150,
    size: "150x150",
  },
  {
    width: 200,
    size: "200x200",
  },
  {
    width: 300,
    size: "300x300",
  },
  {
    width: 400,
    size: "400x400",
  },
  {
    width: 500,
    size: "500x500",
  },
  {
    width: 600,
    size: "600x600",
  },
];

export const ecl : ECL[] = [
  {
    errorCorrectionLevel : 'L',
    label : "Low (~7%)"
  },
  {
    errorCorrectionLevel : 'M',
    label : "Medium (~15%)"
  },
  {
    errorCorrectionLevel : 'Q',
    label : "Quartile (~25%)"
  },
  {
    errorCorrectionLevel : 'H',
    label : "High (~30%)"
  },
]