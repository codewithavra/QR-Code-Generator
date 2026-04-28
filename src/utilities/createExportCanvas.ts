/**
 * @license Apache-2.0
 * @copyright codewithavra
 */

import QRCode from "qrcode";
import type { Options } from "../types";
import { drawWithText } from "./canvasWithText";

const EXPORT_SCALE = 4;

export const createExportCanvas = async (
  option: Options,
  heading: string,
  description: string
): Promise<HTMLCanvasElement | undefined> => {
  if (!option.data) return;

  const qrCanvas = document.createElement("canvas");

  await QRCode.toCanvas(qrCanvas, option.data, {
    width: option.width * EXPORT_SCALE,
    color: {
      dark: option.foreground,
      light: option.background,
    },
    errorCorrectionLevel: option.ecl,
  });

  return drawWithText(qrCanvas, heading, description);
};
