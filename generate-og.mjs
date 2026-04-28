// generate-og.mjs
import sharp from 'sharp';

const svgBuffer = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  
  <!-- Background grid pattern -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1a1a1a" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#grid)"/>

  <!-- QR code placeholder icon -->
  <rect x="480" y="120" width="240" height="240" rx="16" fill="#111" stroke="#333" stroke-width="2"/>
  <rect x="500" y="140" width="80" height="80" rx="4" fill="none" stroke="white" stroke-width="8"/>
  <rect x="620" y="140" width="80" height="80" rx="4" fill="none" stroke="white" stroke-width="8"/>
  <rect x="500" y="260" width="80" height="80" rx="4" fill="none" stroke="white" stroke-width="8"/>
  <rect x="630" y="260" width="60" height="20" fill="white"/>
  <rect x="630" y="300" width="20" height="40" fill="white"/>
  <rect x="670" y="260" width="30" height="30" fill="white"/>

  <!-- Title -->
  <text x="600" y="430" font-family="system-ui, sans-serif" font-size="72" font-weight="700"
        fill="white" text-anchor="middle">QR Craft</text>

  <!-- Tagline -->
  <text x="600" y="500" font-family="system-ui, sans-serif" font-size="28" font-weight="400"
        fill="#888888" text-anchor="middle">Free Custom QR Code Generator</text>

  <!-- URL -->
  <text x="600" y="570" font-family="system-ui, sans-serif" font-size="20"
        fill="#555555" text-anchor="middle">qr-craft-iota.vercel.app</text>
</svg>
`);

await sharp(svgBuffer)
  .png()
  .toFile('public/preview.png');

console.log('preview.png created in /public');