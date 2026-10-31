import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate on devices with a mouse/trackpad pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = !!target.closest('a, button, input, textarea, select, [data-cursor]');
      setIsHovered(interactive);
    };

    const animate = () => {
      // Fluid, natural following with zero restriction on the real cursor
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={ringRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
      style={{
        willChange: 'transform',
        transform: 'translate3d(-100px, -100px, 0)',
      }}
    >
      {/* Sleek, non-blocking trailing accent aura */}
      <div
        className={`rounded-full transition-all duration-200 ease-out border ${
          isHovered
            ? 'w-10 h-10 border-[#f97316] bg-[#f97316]/10 shadow-[0_0_12px_rgba(249,115,22,0.35)]'
            : 'w-6 h-6 border-[#f97316]/50 bg-transparent'
        }`}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};
