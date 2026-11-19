"use client";

import React, { useEffect, useState } from "react";

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-40 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x - 250}px, ${position.y - 250}px, 0)`,
      }}
    >
      <div className="w-[500px] h-[500px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />
    </div>
  );
};

