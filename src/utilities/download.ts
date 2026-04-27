/**
 * @license Apache-2.0
 * @copyright codewithavra
 */
export const download = (canvas: HTMLCanvasElement, filename: string = "qrcode.png"): void => {
    const a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = filename;
    a.click();
  };