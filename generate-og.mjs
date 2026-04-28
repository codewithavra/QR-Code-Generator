// generate-og.mjs
import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">

  <!-- Base -->
  <rect width="1200" height="630" fill="#e6e6e6"/>

  <!-- Inset border -->
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#cccccc" stroke-width="1.5" rx="6"/>

  <!-- Left vertical rule -->
  <line x1="100" y1="28" x2="100" y2="602" stroke="#cccccc" stroke-width="1"/>

  <!-- Corner dots -->
  <circle cx="28" cy="28" r="5" fill="#bbbbbb"/>
  <circle cx="1172" cy="28" r="5" fill="#bbbbbb"/>
  <circle cx="28" cy="602" r="5" fill="#bbbbbb"/>
  <circle cx="1172" cy="602" r="5" fill="#bbbbbb"/>

  <!-- Eyebrow -->
  <text x="136" y="116"
        font-family="system-ui,sans-serif" font-size="18" font-weight="600"
        fill="#999999" letter-spacing="6">QR CRAFT</text>

  <!-- Accent bar -->
  <rect x="136" y="130" width="130" height="4" fill="#111111" rx="2"/>

  <!-- Headline -->
  <text x="136" y="268"
        font-family="system-ui,sans-serif" font-size="96" font-weight="700"
        fill="#111111" letter-spacing="-3">Generate.</text>
  <text x="136" y="376"
        font-family="system-ui,sans-serif" font-size="96" font-weight="700"
        fill="#111111" letter-spacing="-3">Style. Share.</text>

  <!-- Divider -->
  <line x1="136" y1="406" x2="580" y2="406" stroke="#cccccc" stroke-width="1.5"/>

  <!-- Subtext -->
  <text x="136" y="444"
        font-family="system-ui,sans-serif" font-size="24" font-weight="400"
        fill="#888888">Custom colors, sizes &amp; error correction.</text>
  <text x="136" y="476"
        font-family="system-ui,sans-serif" font-size="24" font-weight="400"
        fill="#888888">Free to use. No signup required.</text>

  <!-- Pills -->
  <rect x="136" y="508" width="168" height="44" rx="22" fill="#d8d8d8" stroke="#bbbbbb" stroke-width="1.5"/>
  <text x="220" y="535"
        font-family="system-ui,sans-serif" font-size="19" font-weight="500"
        fill="#444444" text-anchor="middle">Custom Colors</text>

  <rect x="316" y="508" width="188" height="44" rx="22" fill="#d8d8d8" stroke="#bbbbbb" stroke-width="1.5"/>
  <text x="410" y="535"
        font-family="system-ui,sans-serif" font-size="19" font-weight="500"
        fill="#444444" text-anchor="middle">Error Correction</text>

  <rect x="516" y="508" width="168" height="44" rx="22" fill="#d8d8d8" stroke="#bbbbbb" stroke-width="1.5"/>
  <text x="600" y="535"
        font-family="system-ui,sans-serif" font-size="19" font-weight="500"
        fill="#444444" text-anchor="middle">Free Download</text>

  <!-- URL -->
  <text x="136" y="588"
        font-family="system-ui,sans-serif" font-size="20" fill="#aaaaaa">
    qr-craft-iota.vercel.app
  </text>

  <!-- Logo — right side, centered vertically -->
  <g transform="translate(790, 115) scale(0.59)">
    <rect x="80" y="80" width="220" height="220" rx="24" fill="#111111"/>
    <rect x="104" y="104" width="172" height="172" rx="14" fill="#e6e6e6"/>
    <rect x="128" y="128" width="124" height="124" rx="8" fill="#111111"/>

    <rect x="380" y="80" width="220" height="220" rx="24" fill="#111111"/>
    <rect x="404" y="104" width="172" height="172" rx="14" fill="#e6e6e6"/>
    <rect x="428" y="128" width="124" height="124" rx="8" fill="#111111"/>

    <rect x="80" y="380" width="220" height="220" rx="24" fill="#111111"/>
    <rect x="104" y="404" width="172" height="172" rx="14" fill="#e6e6e6"/>
    <rect x="128" y="428" width="124" height="124" rx="8" fill="#111111"/>

    <rect x="384" y="384" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="452" y="384" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="520" y="384" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="384" y="452" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="452" y="452" width="52" height="52" rx="8" fill="#e6e6e6" stroke="#111111" stroke-width="6"/>
    <rect x="520" y="452" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="384" y="520" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="452" y="520" width="52" height="52" rx="8" fill="#111111"/>
    <rect x="520" y="520" width="52" height="52" rx="8" fill="#111111"/>
  </g>

</svg>`;

await sharp(Buffer.from(svg))
  .png({ quality: 100 })
  .toFile('public/preview.png');

console.log('✓ public/preview.png ready (1200×630)');