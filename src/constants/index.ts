/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * types
 */
import type { ECL, Preset, SizeOfQr } from "../types";

/**
 * icons
 */
import { FaGlobe } from "react-icons/fa";
import { MdContacts, MdEmail, MdPayment } from "react-icons/md";
import { IoText } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";

export const presets: Preset[] = [
  {
    template: "Website URL",
    placeholder: "https://example.com",
    icon: FaGlobe,
  },
  {
    template: "Contact card",
    placeholder:
      "BEGIN:VCARD\nVERSION:3.0\nFN:John Doe\nTEL:+1234567890\nEMAIL:john@example.com\nEND:VCARD",
    icon: MdContacts,
  },
  {
    template: "Plain Text",
    placeholder: "Hello World! This is a test QR code.",
    icon: IoText,
  },
  {
    template: "UPI id",
    placeholder: "upi://pay?pa=name@bank&pn=John Doe&cu=INR",
    icon: MdPayment,
  },
  {
    template: "WIFI Network",
    placeholder: "WIFI:S:MyWiFi;T:WPA;P:mypassword123;;",
    icon: FaWifi,
  },
  {
    template: "Email Link",
    placeholder:
      "mailto:someone@example.com?subject=Hello&body=This is a QR code for email.",
    icon: MdEmail,
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

export const ecl: ECL[] = [
  {
    errorCorrectionLevel: "L",
    label: "Low (~7%)",
  },
  {
    errorCorrectionLevel: "M",
    label: "Medium (~15%)",
  },
  {
    errorCorrectionLevel: "Q",
    label: "Quartile (~25%)",
  },
  {
    errorCorrectionLevel: "H",
    label: "High (~30%)",
  },
];
