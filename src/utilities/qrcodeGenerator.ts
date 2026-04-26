/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

/**
 * Node modules
 */
import QRCode from "qrcode";

/**
 * types
 */
import type { Options } from "../types";

export const qrcodeGenerator = async (
  options: Options,
  canvas: HTMLCanvasElement
): Promise<void> => {
  await QRCode.toCanvas(canvas, options.data, {
    width: options.width,
    color: {
      dark: options.foreground,
      light: options.background,
    },
    errorCorrectionLevel: options.ecl,
  });
};
