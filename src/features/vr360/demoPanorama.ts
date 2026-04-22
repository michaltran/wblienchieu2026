
export type DemoTheme = "reception" | "emergency" | "internal";

interface DemoOptions {
  title: string;
  theme: DemoTheme;
  accent?: string;
  width?: number; // default 1200
  height?: number; // default 600
}

function drawToCanvas(canvas: HTMLCanvasElement, opts: DemoOptions) {
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return;

  // 1. Premium Background Gradients
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  const horizonY = height * 0.5;

  if (opts.theme === 'reception') {
      // Modern Blue/White - Clean & Airy
      gradient.addColorStop(0, "#f8fafc");    // Ceiling
      gradient.addColorStop(0.49, "#e2e8f0"); // Horizon Sky
      gradient.addColorStop(0.5, "#cbd5e1");  // Horizon Floor
      gradient.addColorStop(1, "#f1f5f9");    // Floor
  } else if (opts.theme === 'emergency') {
      // Warm/Urgent (Red tint) - Alert but professional
      gradient.addColorStop(0, "#fff5f5");
      gradient.addColorStop(0.49, "#fed7aa");
      gradient.addColorStop(0.5, "#fdba74");
      gradient.addColorStop(1, "#fff1f2");
  } else {
      // Internal/Generic (Slate/Gray) - Professional
      gradient.addColorStop(0, "#f1f5f9");
      gradient.addColorStop(0.49, "#cbd5e1");
      gradient.addColorStop(0.5, "#94a3b8");
      gradient.addColorStop(1, "#e2e8f0");
  }
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // 2. Horizon Line
  ctx.strokeStyle = "rgba(0,0,0,0.1)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, horizonY);
  ctx.lineTo(width, horizonY);
  ctx.stroke();

  // 3. Perspective Grid (Floor Only)
  ctx.strokeStyle = "rgba(0,0,0,0.08)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  
  // Radial lines from center bottom (approximate perspective)
  const centerX = width / 2;
  const floorBottom = height;
  for (let x = -width; x < width * 2; x += width / 12) {
      ctx.moveTo(x, horizonY);
      ctx.lineTo(x + (x - centerX) * 2, floorBottom);
  }
  // Horizontal floor rings
  for (let y = horizonY; y < height; y += (height - y) / 4) {
      if (y === horizonY) continue;
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
  }
  ctx.stroke();

  // 4. Soft Abstract Shapes (Simulate walls/furniture)
  ctx.fillStyle = "rgba(255,255,255,0.3)";
  // "Wall" band
  ctx.fillRect(0, height * 0.35, width, height * 0.15);
  
  // 5. Decorative Markers (Fake doors/windows)
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  for (let x = 0; x < width; x += width / 6) {
      ctx.fillRect(x + 20, height * 0.3, width / 12, height * 0.2);
  }

  // 6. Typography
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const textY = height / 3;
  
  // Title shadows for depth
  ctx.shadowColor = "rgba(0,0,0,0.1)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;

  // Main Title (Repeated for 360 view)
  ctx.font = "bold 70px system-ui, sans-serif";
  ctx.fillStyle = opts.accent || (opts.theme === 'emergency' ? "#e11d48" : "#0f172a");
  
  [width * 0.1, width * 0.5, width * 0.9].forEach(x => {
     ctx.fillText(opts.title.toUpperCase(), x, textY);
  });

  // Reset shadow
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  // Subtitle
  ctx.font = "500 32px system-ui, sans-serif";
  ctx.fillStyle = "#64748b";
  [width * 0.1, width * 0.5, width * 0.9].forEach(x => {
      ctx.fillText("MÔ PHỎNG / DEMO MODE", x, textY + 80);
  });

  // 7. Info Badge at bottom (Feet area)
  ctx.font = "italic 24px system-ui, sans-serif";
  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.fillText("Replace with real 360° panorama images", width / 2, height - 80);
}

export function generateDemoEquirectDataUrl(opts: DemoOptions): string {
  const width = opts.width || 1200;
  const height = opts.height || 600;
  
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  drawToCanvas(canvas, opts);

  return canvas.toDataURL("image/jpeg", 0.9);
}

export async function generateDemoEquirectBlobUrl(opts: DemoOptions): Promise<string> {
    const width = opts.width || 1200;
    const height = opts.height || 600;
    
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    drawToCanvas(canvas, opts);
  
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            if (blob) {
                resolve(URL.createObjectURL(blob));
            } else {
                resolve("");
            }
        }, "image/jpeg", 0.9);
    });
}
