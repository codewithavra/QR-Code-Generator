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
  option: Options,
  canvas: HTMLCanvasElement
): Promise<void> => {
  await QRCode.toCanvas(canvas, option.data, {
    width: option.width,
    color: {
      dark: option.foreground,
      light: option.background,
    },
    errorCorrectionLevel: option.ecl,
  });
};
