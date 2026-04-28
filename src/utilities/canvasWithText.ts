export const drawWithText = (
  canvas: HTMLCanvasElement,
  heading: string,
  description: string
) => {
  if (!heading && !description) return canvas;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const width = canvas.width;
  const padding = 20;
  const maxWidth = width - padding * 2;

  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = width;
  tempCanvas.height = 1000; // temporary large height

  const tempCtx = tempCanvas.getContext("2d");
  if (!tempCtx) return;

  tempCtx.textAlign = "center";
  tempCtx.fillStyle = "#000";

  // --- helper for wrapping ---
  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ) => {
    const words = text.split(" ");
    const lines: string[] = [];
    let line = "";

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + " ";
      if (ctx.measureText(testLine).width > maxWidth && i > 0) {
        lines.push(line);
        line = words[i] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line);
    return lines;
  };

  let y = 20;

  // --- heading ---
  let headingLines: string[] = [];

  if (heading) {
    tempCtx.font = "bold 20px sans-serif";
    headingLines = wrapText(tempCtx, heading, maxWidth);
    y += headingLines.length * 24 + 10;
  }

  // --- QR position ---
  y += canvas.height + 20;

  // --- description ---
  let descLines: string[] = [];

  if (description) {
    tempCtx.font = "14px sans-serif";
    descLines = wrapText(tempCtx, description, maxWidth);
    y += descLines.length * 18;
  }

  // --- final canvas ---
  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = width;
  finalCanvas.height = y + 20;

  const finalCtx = finalCanvas.getContext("2d");
  if (!finalCtx) return;

  // background
  finalCtx.fillStyle = "#fff";
  finalCtx.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

  finalCtx.textAlign = "center";
  finalCtx.fillStyle = "#000";

  let currentY = 30;

  // draw heading
  if (heading) {
    finalCtx.font = "bold 20px sans-serif";
    headingLines.forEach((line) => {
      finalCtx.fillText(line, width / 2, currentY);
      currentY += 24;
    });
    currentY += 10;
  }

  // draw QR
  finalCtx.drawImage(canvas, 0, currentY);
  currentY += canvas.height + 20;

  // draw description
  if (description) {
    finalCtx.font = "14px sans-serif";
    descLines.forEach((line) => {
      finalCtx.fillText(line, width / 2, currentY);
      currentY += 18;
    });
  }

  return finalCanvas;
};
