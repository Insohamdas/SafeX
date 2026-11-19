"use client";

import React, { useEffect, useRef, useState } from "react";

export const CrowdScene: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rerouteActive, setRerouteActive] = useState<boolean>(false);
  const [cycleTime, setCycleTime] = useState<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Generate 600 particles representing mass flow
    const particleCount = Math.min(width < 768 ? 320 : 650, 750);
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseSpeed: number;
      pathIndex: number;
      t: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        baseSpeed: 0.8 + Math.random() * 0.9,
        pathIndex: Math.floor(Math.random() * 3),
        t: Math.random() * 1000,
      });
    }

    let startTime = performance.now();

    const render = (time: number) => {
      const elapsedSec = (time - startTime) / 1000;
      const cycle = elapsedSec % 14; // 14-second story loop
      const isRerouting = cycle > 7 && cycle < 12;
      setRerouteActive(isRerouting);
      setCycleTime(Math.floor(cycle));

      ctx.fillStyle = "rgba(4, 5, 10, 0.28)";
      ctx.fillRect(0, 0, width, height);

      const hotspotX = width * 0.55;
      const hotspotY = height * 0.48;

      // Draw Hotspot Pulse Ring
      if (cycle > 4 && cycle < 13) {
        const ringProgress = (cycle - 4) / 9;
        ctx.beginPath();
        ctx.arc(hotspotX, hotspotY, 70 + Math.sin(time * 0.005) * 12, 0, Math.PI * 2);
        ctx.strokeStyle = isRerouting
          ? "rgba(46, 242, 160, 0.4)" // Cooling green
          : "rgba(255, 77, 94, 0.6)"; // Warning red
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Update & Draw Flow Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.t += 0.008 * p.baseSpeed;

        // Flow vectors towards center plaza and out
        const dx = hotspotX - p.x;
        const dy = hotspotY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Color calculation based on proximity to hotspot and cycle phase
        let color = "rgba(25, 227, 255, 0.7)"; // Normal cyan
        if (dist < 140) {
          if (cycle < 7) {
            color = "rgba(255, 194, 75, 0.85)"; // Amber caution
          } else if (cycle < 10) {
            color = "rgba(255, 77, 94, 0.95)"; // Red surge danger
          } else {
            color = "rgba(46, 242, 160, 0.85)"; // Rerouted green
          }
        }

        // Particle dynamics
        if (isRerouting && dist < 160) {
          // Divert outward onto safe path
          p.x += Math.sin(p.t) * 1.8 + 1.2;
          p.y += Math.cos(p.t) * 1.8 - 0.8;
        } else {
          // Default arterial flow
          p.x += Math.cos(p.t * 0.5 + p.pathIndex) * 1.2 + 0.8;
          p.y += Math.sin(p.t * 0.4) * 0.8 + 0.6;
        }

        // Wrap around boundaries
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;
        if (p.y > height + 20) p.y = -20;
        if (p.y < -20) p.y = height + 20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, dist < 120 ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full opacity-65" />
      
      {/* Floating Hotspot HUD Label */}
      <div
        className="absolute top-[44%] left-[53%] -translate-x-1/2 -translate-y-1/2 transition-all duration-500 pointer-events-none"
      >
        <div className={`px-3 py-1.5 rounded-xl border backdrop-blur-md text-[10px] font-mono tracking-wider uppercase flex items-center gap-2 shadow-2xl ${
          rerouteActive
            ? "bg-emerald-950/80 border-emerald-400/50 text-emerald-300"
            : cycleTime > 4
            ? "bg-red-950/80 border-red-500/60 text-red-300 animate-pulse"
            : "bg-slate-900/70 border-white/10 text-slate-400"
        }`}>
          <span className={`w-2 h-2 rounded-full ${rerouteActive ? "bg-emerald-400" : "bg-red-500 animate-ping"}`} />
          <span>
            {rerouteActive
              ? "ZONE C-04 · DYNAMIC REROUTE ACTIVE"
              : cycleTime > 4
              ? "ZONE C-04 · RISK 87 · SURGE DETECTED"
              : "SECTOR C · FLOW OPTIMAL"}
          </span>
        </div>
      </div>
    </div>
  );
};

