export const drawWithText = (
  canvas: HTMLCanvasElement,
  heading: string,
  description: string
) => {
  const qrWidth = canvas.width;
  const qrHeight = canvas.height;
  const outerPadding = Math.max(40, Math.round(qrWidth * 0.08));
  const qrPadding = Math.max(28, Math.round(qrWidth * 0.06));
  const cardWidth = qrWidth + outerPadding * 2;
  const contentWidth = cardWidth - outerPadding * 2;

  const headingText = heading.trim();
  const descriptionText = description.trim();

  const headingFontSize = Math.max(36, Math.round(qrWidth * 0.08));
  const descriptionFontSize = Math.max(24, Math.round(qrWidth * 0.045));
  const headingLineHeight = Math.round(headingFontSize * 1.25);
  const descriptionLineHeight = Math.round(descriptionFontSize * 1.35);

  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");
  if (!tempCtx) return;

  const wrapText = (
    ctx: CanvasRenderingContext2D,
    text: string,
    maxWidth: number
  ) => {
    if (!text) return [];
    const words = text.split(/\s+/).filter(Boolean);
    const lines: string[] = [];
    let line = "";

    words.forEach((word) => {
      const testLine = line ? `${line} ${word}` : word;
      if (ctx.measureText(testLine).width > maxWidth && line) {
        lines.push(line);
        line = word;
      } else {
        line = testLine;
      }
    });

    if (line) lines.push(line);
    return lines;
  };

  tempCtx.font = `700 ${headingFontSize}px Inter, sans-serif`;
  const headingLines = wrapText(tempCtx, headingText, contentWidth);

  tempCtx.font = `500 ${descriptionFontSize}px Inter, sans-serif`;
  const descriptionLines = wrapText(tempCtx, descriptionText, contentWidth);

  const headingBlockHeight = headingLines.length * headingLineHeight;
  const descriptionBlockHeight = descriptionLines.length * descriptionLineHeight;
  const topGap = headingLines.length ? Math.round(outerPadding * 0.45) : 0;
  const bottomGap = descriptionLines.length ? Math.round(outerPadding * 0.45) : 0;

  const cardHeight =
    outerPadding +
    headingBlockHeight +
    topGap +
    qrPadding +
    qrHeight +
    qrPadding +
    bottomGap +
    descriptionBlockHeight +
    outerPadding;

  const finalCanvas = document.createElement("canvas");
  finalCanvas.width = cardWidth;
  finalCanvas.height = cardHeight;

  const finalCtx = finalCanvas.getContext("2d");
  if (!finalCtx) return;

  finalCtx.fillStyle = "#ffffff";
  finalCtx.fillRect(0, 0, cardWidth, cardHeight);

  finalCtx.textAlign = "center";
  finalCtx.textBaseline = "top";
  finalCtx.fillStyle = "#111827";

  let currentY = outerPadding;

  if (headingLines.length) {
    finalCtx.font = `700 ${headingFontSize}px Inter, sans-serif`;
    headingLines.forEach((line) => {
      finalCtx.fillText(line, cardWidth / 2, currentY);
      currentY += headingLineHeight;
    });
    currentY += topGap;
  }

  const qrX = (cardWidth - qrWidth) / 2;
  currentY += qrPadding;
  finalCtx.drawImage(canvas, qrX, currentY);
  currentY += qrHeight + qrPadding;

  if (descriptionLines.length) {
    currentY += bottomGap;
    finalCtx.fillStyle = "#4b5563";
    finalCtx.font = `500 ${descriptionFontSize}px Inter, sans-serif`;
    descriptionLines.forEach((line) => {
      finalCtx.fillText(line, cardWidth / 2, currentY);
      currentY += descriptionLineHeight;
    });
  }

  return finalCanvas;
};
