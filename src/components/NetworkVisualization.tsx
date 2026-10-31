import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  isAccent: boolean;
  connections: number[];
  pulsePhase: number;
}

export const NetworkVisualization: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140
    };

    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = canvas.width = rect?.width || 600;
      height = canvas.height = rect?.height || 500;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Initialize Network Points
    const numPoints = Math.min(Math.floor((width * height) / 9000), 55);
    const points: Point[] = [];

    const accentColor = '#f97316';
    const coolGrayColor = '#555555';

    for (let i = 0; i < numPoints; i++) {
      const isAccent = Math.random() < 0.22;
      const baseR = isAccent ? Math.random() * 2.5 + 3.5 : Math.random() * 2 + 2;
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: baseR,
        baseRadius: baseR,
        color: isAccent ? accentColor : coolGrayColor,
        isAccent,
        connections: [],
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Update positions
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
          p.radius = p.baseRadius + force * 2.5;
        } else {
          p.radius = p.baseRadius + Math.sin(time * 2 + p.pulsePhase) * 0.5;
        }
      }

      // Draw Connections (Neural Links)
      const maxDistance = 125;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i];
          const p2 = points[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (p1.isAccent || p2.isAccent) {
              ctx.strokeStyle = `rgba(249, 115, 22, ${alpha * 1.2})`;
              ctx.lineWidth = 1.2;
            } else {
              ctx.strokeStyle = `rgba(100, 100, 100, ${alpha})`;
              ctx.lineWidth = 0.8;
            }
            ctx.stroke();

            // Render animated data packet traveling along line
            if ((i + j) % 7 === 0) {
              const packetProgress = (time * 0.4 + (i * 0.1)) % 1;
              const px = p1.x + (p2.x - p1.x) * packetProgress;
              const py = p1.y + (p2.y - p1.y) * packetProgress;

              ctx.beginPath();
              ctx.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx.fillStyle = '#f97316';
              ctx.fill();
            }
          }
        }
      }

      // Draw Points (Nodes)
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Accent outer glow ring
        if (p.isAccent) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(249, 115, 22, 0.12)';
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden glass-panel border border-[#b7c3d0]/15 flex items-center justify-center">
      {/* Decorative Overlay Label */}
      <div className="absolute top-4 left-4 z-10 font-mono text-xs tracking-wider text-[#b7c3d0]/80 flex items-center gap-2 bg-[#1c2230]/80 px-3 py-1.5 rounded-full border border-[#b7c3d0]/15">
        <span className="w-2 h-2 rounded-full bg-[#c46a5a] animate-pulse"></span>
        INTERACTIVE NEURAL GRAPH // ARCHITECTURE
      </div>

      <div className="absolute bottom-4 right-4 z-10 font-mono text-[10px] text-[#b7c3d0]/60 hidden sm:block">
        NODE_COUNT: ACTIVE | COORD_INTERACTION: ENABLED
      </div>

      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />
    </div>
  );
};
